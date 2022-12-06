import React from "react";
import { useNavigate } from "react-router-dom";

import { socket, newPlayer } from "../PlayerForm/PlayerForm";

function CreateRoom() {
  const navigate = useNavigate();

  if (socket.id === undefined) {
    navigate("/");
  }

  const handleNewGame = (e) => {
    e.preventDefault();
    let gameTime = document.getElementById("gameTime").value;
    let playersNumber = document.getElementById("playersNumber").value;
    newPlayer.room = socket.id;
    socket.emit("createGame", newPlayer, gameTime, playersNumber);
    socket.emit("newPlayer", newPlayer, socket.id);
    navigate("/waiting");
  };

  return (
    <div className="CreateRoomForm_container">
      <form className="CreateRoomForm" onSubmit={(e) => handleNewGame(e)}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Duration time in seconds of the game (from 30s to 600s)
          </label>
          <input
            type="number"
            className="form-control"
            id="gameTime"
            placeholder="Input time in seconds"
            min="30"
            max="600"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Input time in seconds (from 30 to 600 (10 min))
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Select number of players
          </label>
          <select className="form-control" id="playersNumber">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <small id="emailHelp" className="form-text text-muted">
            Select maximun number of players (from 2 to 8)
          </small>
        </div>
        <button type="submit" className="btn btn-info">
          Accept
        </button>
      </form>
    </div>
  );
}

export default CreateRoom;
