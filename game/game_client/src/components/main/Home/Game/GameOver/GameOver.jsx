import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { socket } from "../PlayerForm/PlayerForm";

function GameOver() {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);

  socket.emit("getPlayerList", true);
  socket.once("resultPlayerList", (data) => {
    setPlayers(data);
    if (data?.length > 0 && data[0].id == socket.id) {
      socket.emit("sendPlayersResult", data.filter((player) => player.id !== '-1'))
    }
    socket.disconnect();
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="gameOver_container">
        <h1 className="gameOver_title">Game Over</h1>
        <div>
          <h3 className="gameOver_finalScores">Final Scores</h3>
          {players
            .filter((player) => player.id !== '-1')
            .map((player) => (
              <h2>
                {player.name}: {player.score} pts
              </h2>
            ))}
        </div>
        <div>
          <button className="gameOver_button" onClick={(e) => handleOnClick(e)}>Return to Home</button>
        </div>
      </div>
    </>
  );
}

export default GameOver;