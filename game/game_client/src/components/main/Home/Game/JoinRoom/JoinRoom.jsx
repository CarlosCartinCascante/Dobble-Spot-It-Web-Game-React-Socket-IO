import React from "react";
import { useNavigate } from "react-router-dom";

import { socket, newPlayer } from "../PlayerForm/PlayerForm";

function JoinRoom() {
  const navigate = useNavigate();

  if (socket.id === undefined) {
    navigate("/");
  }
  socket.on("validGame", (data) => {
    data === true ? navigate("/waiting") : alert("Invalid game code");
  });
  socket.on("gameFull", (data) => {
    if (data === true)
      alert("The game room its full or the game started")
  });

  const handleJoinGame = (e) => {
    e.preventDefault();
    let gameId = document.getElementById("gameId").value;
    newPlayer.room = gameId;
    socket.emit("newPlayer", newPlayer, gameId);
  };

  return (
    <div className="JoinRoomForm_container">
      <form className="JoinRoomForm" onSubmit={(e) => handleJoinGame(e)}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Enter Room ID</label>
          <input
            type="text"
            className="form-control"
            id="gameId"
            placeholder="Input room ID"
            required
          />
        </div>
        <button type="submit" className="btn btn-info">
          Accept
        </button>
      </form>
    </div>
  );
}

export default JoinRoom;
