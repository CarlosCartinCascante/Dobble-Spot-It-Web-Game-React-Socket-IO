import React from "react";
import player from "../Player/Player";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";
export var socket = undefined;
export var newPlayer = null;

let targetClicked = null;

function PlayerForm() {
  const getValue = (event) => {
    targetClicked = event.target.value;
  };

  const navigate = useNavigate();

  const handlerNewPlayer = (e) => {
    socket = socketIO.connect("http://localhost:80");
    e.preventDefault();
    let playerName = document.getElementById("playerName").value;

    if (playerName.length > 20 || playerName.length === 0) {
      alert("User name must be between 1 and 20 characters");
      return;
    }
    newPlayer = new player(socket.id, playerName, 0, 0);

    const link = document.querySelector("button");
    let buttonCreate = link.getAttribute("buttoncreateroom");

    if (targetClicked === buttonCreate) {
      navigate("/createroom");
    } else {
      navigate("/joinroom");
    }
  };

  return (
    <>
      <div className="playerForm">
        <form className="playerNameForm" onSubmit={(e) => handlerNewPlayer(e)}>
          <label className="playerNameForm__label">
            Input your Nickname
            <input
              className="playerNameForm__input"
              type="text"
              id="playerName"
              placeholder="Choose a name"
              required
            />
            <button
              className="playerNameForm__button"
              type="submit"
              buttoncreateroom="createRoomBtn"
              value={"createRoomBtn"}
              onClick={(e) => getValue(e)}
            >
              Create Room
            </button>
            <button
              className="playerNameForm__button"
              type="submit"
              buttonjoinroom="joinRoomBtn"
              value={"joinRoomBtn"}
              onClick={(e) => getValue(e)}
            >
              Join Room
            </button>
          </label>
        </form>
      </div>
    </>
  );
}

export default PlayerForm;
