
const {collection, query, orderBy, limit, getDocs, addDoc, Timestamp} =  require('firebase/firestore');
const express = require('express');
const {db} = require('./game_database/Firebase')
const Player = require('./Entities/Player');
const Card = require('./Entities/Card');
const Game = require('./Entities/Game');
const Room = require('./Entities/Room');
const StackOfCards = require('./Entities/StackOfCards');
const {searchPlayerById} = require('./Services/PlayerService');

const app = express();
const PORT = 80;

const deckId = "-1";

//New imports
const http = require('http').Server(app);
const cors = require('cors');
const { join } = require('path');
const e = require('express');

const stackOfCards = new StackOfCards();
app.use(cors());

let rooms = [];

//New imports
const socketIO = require('socket.io')(http, {
  cors: {
      origin: '*',
      methods: ['GET','POST']
  }
});

const refreshCards = (playerList) => {
  playerList.map(player => {
    player.card = stackOfCards.getRandomCard();
  });
}

const addPlayerResult = async (player) => {
  try {
    await addDoc(collection(db, 'Leaderboard'), {
      playerName: player.name,
      playerScore: player.score,
      gameDate: Timestamp.now()
    })
  } catch (err) {
    console.log(err)
  }
}

const retrieveData = async (socket) => {
  let playerScores = [];
  const q = query(collection(db, "Leaderboard"), orderBy("playerScore","desc"), limit(10));
  const docsSnap = await getDocs(q);
  docsSnap.forEach((doc) => {
    playerScores.push(doc.data());
  });
  socket.emit("resultPlayersScore", playerScores)
};

const searchRoom = (roomId) => {
  var room = null;
  rooms.map( (element) => {
    if (element.id === roomId) {
      room = element;
      return room;
    }
  })
  return room;
}

const deleteRoom = (roomId) => {
  rooms.map( (room,index) => {
    if (room.id === roomId) {
      rooms.splice(index,1);
    }
  })
}

const deletePlayer = (roomId, playerId) => {
  var updatedPlayerList = null;
  rooms.map( (room) => {
    if (room.id === roomId) {
      room.playerList.map ( (player, index) => {
        if (player.id === playerId) {
          room.playerList.splice(index,1);
          updatedPlayerList = room.playerList;
          return updatedPlayerList;
        }
      })
    }
  })
  return updatedPlayerList;
}

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.roomId = -1;

  socket.on("getPlayersScore", (data) => {
    retrieveData(socket);
  })

  socket.on("createGame", (player, gameTime, playersNumber) => {
    gameTime = gameTime * 1000;
    var newRoom = new Room(socket.id, gameTime, playersNumber);
    deleteRoom(socket.id);
    rooms.push(newRoom);
    socket.join(socket.id);
    socket.roomId = newRoom.id;
  })

  socket.on("newPlayer", (player,roomId) => {
    var room = searchRoom(roomId);
    if (room === null) {
      socketIO.to(socket.id).emit("validGame",false);
    } else{
      if (room.playerList.length + 1 <= room.maxPlayerNumber && room.gameStarted === false) {
        socket.join(roomId);
        socket.roomId = roomId;
        var newPlayer = new Player(socket.id,player.namee,0,roomId);
        socketIO.to(room.id).emit("validGame",true);
        room.playerList.push(newPlayer);
        socketIO.to(room.id).emit("playerList", room.playerList);
      } else {
        socketIO.to(socket.id).emit("gameFull",true);
      }
    }
  })

  socket.on("startGame", roomId => {
    var room = searchRoom(roomId);
    room.gameStarted = true;
    room.playerList.push(new Player(deckId, "Deck",0,roomId));
    refreshCards(room.playerList);
    socketIO.to(roomId).emit("redirectGame", true);
    socketIO.to(roomId).emit("gameTime", room.gameTime);
    socketIO.to(roomId).emit("playerList", room.playerList);
  })

  socket.on("newMove", (data, roomId) => {
    let card1 = data[0];
    let card2 = data[1];
    if((card1?.playerId === deckId || card2?.playerId === deckId) && (card1?.symbol === card2?.symbol)) {
      var room = searchRoom(roomId);
      const actualPlayer = searchPlayerById(room.playerList, socket.id);
      actualPlayer.score = actualPlayer.score + 1;
      refreshCards(room.playerList);
      socketIO.to(roomId).emit("playerList", room.playerList);
    }
  })

  socket.on("getPlayerList", (data) => {
    socket.gameOver = true;
    var room = searchRoom(socket.roomId);
    if (room != null) {
      socketIO.to(socket.id).emit("resultPlayerList",room.playerList);
    }
  })

  socket.once("sendPlayersResult", (players) => {
    var room = searchRoom(socket.roomId);
    if (room != null) {
      players.map ( (player) => {
        addPlayerResult(player);
      })
    }
  })

  socket.on("disconnecting", () => {
    console.log('🔥: A user disconnected' + socket.id);
    console.log("Room Id:" + socket.roomId);
    if (socket.gameOver != true) {
      let updatedPlayerList = deletePlayer(socket.roomId, socket.id)
      if (updatedPlayerList != null) {
        if (updatedPlayerList.length === 1 && updatedPlayerList[0].id === deckId) {
          deleteRoom(socket.roomId);
        } else {
          socketIO.to(socket.roomId).emit("playerList", updatedPlayerList);
        }
      }
    }
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});