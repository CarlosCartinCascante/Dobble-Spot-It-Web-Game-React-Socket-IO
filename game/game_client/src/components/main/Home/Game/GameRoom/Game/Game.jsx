import React, { useEffect, useState } from "react";
import Cards from "./Card/Card";
import { socket } from "../../PlayerForm/PlayerForm";
import { getSymbolsAssets } from "../../../../../../services/Cards/getData/cardsData";
import { getSymbolsNames } from "../../../../../../services/Cards/getData/cardsData";
import { useNavigate } from "react-router-dom";

import audio from "../../../../../../assets/sounds/hit01.wav";
import playSound from "../../../PlaySound/playSound";

function Game() {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [actualPlayer, setActualPlayer] = useState(null);
  const [listOfCards, setCards] = useState([]);

  const [firstClicked, setFirstClicked] = useState(null);
  const [secondClicked, setSecondClicked] = useState(null);

  socket.on("playerList", (data) => {
    if (data.length <= 2) {
      navigate("/");
    }
    setPlayers(data);
  });

  const clean = () => {
    setFirstClicked(null);
    setSecondClicked(null);
  };

  useEffect(() => {
    if (socket.id === undefined) {
      navigate("/");
    }
    let tempActualPlayer = null;
    let cardList = [];
    clean();
    players.map((player) => {
      player.card.id = player.id;
      cardList.push(player.card);
      if (player.id === socket.id) {
        tempActualPlayer = player;
      }
    });
    setActualPlayer(tempActualPlayer);
    setCards(cardList);
  }, [players]);

  var cards = {
    symbols: getSymbolsNames(),
    symbolsSrc: getSymbolsAssets(),
    list: listOfCards,
  };

  useEffect(() => {
    if (firstClicked !== null && secondClicked !== null) {
      socket.emit("newMove", [firstClicked, secondClicked], players[0].roomId);
      clean();
    }
  }, [secondClicked]);

  const handleClick = (event) => {
    playSound();
    if (firstClicked === null) {
      setFirstClicked({
        playerId: event.currentTarget.getAttribute("data-card_id"),
        symbol: event.currentTarget.value,
      });
    } else {
      setSecondClicked({
        playerId: event.currentTarget.getAttribute("data-card_id"),
        symbol: event.currentTarget.value,
      });
    }
  };
  return (
    <div className="game_container">
      <div className="actualPlayerName">
        <h1>{actualPlayer?.name}</h1>
      </div>
      <div className="scores_container">
        <div>
          <h2>
            {actualPlayer?.name} Score: {actualPlayer?.score}
          </h2>
        </div>
        <div>
          <h2 className="soresTables_tittle">Scores table:</h2>
          {players
            .filter((player) => player.id !== "-1")
            .map((player) => (
              <h2>
                {player.name}: {player.score} pts
              </h2>
            ))}
        </div>
      </div>
      <div>
        <Cards
          actualPlayerId={actualPlayer?.id}
          playerName={players}
          handleClick={(event) => handleClick(event)}
          cards={cards}
          key={actualPlayer?.id}
          disabled={[firstClicked, secondClicked]}
        />
      </div>
      <audio id="audio_hit" src={audio}></audio>
    </div>
  );
}

export default Game;
