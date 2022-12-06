import React, { useState, useEffect }  from "react";
import "./Leaderboard.scss";
import user_icon from "../../../assets/icons/user.svg";
import crown from "../../../assets/icons/crown.svg";
import socketIO from "socket.io-client";

function Leaderboard() {
  const [allPlayers, getallPlayers] = useState([]);

  useEffect(() => {
    var socket = socketIO.connect("http://localhost:80");
    socket.emit("getPlayersScore", true);
    socket.once("resultPlayersScore", (data) => {
      getallPlayers(data);
      socket.disconnect();
    })
  }, []);

  return (
    <div className="leaderboard">
      <article className="top_leaders card-group">
        <div className="cardPlayer card-body">
          <img src={crown} alt="crown" className="player_crown" />
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon" />
            {allPlayers
              .filter((player, index) => index == 1)
              .map((player, index) => {
                return (
                  <div className="player_cards" key={index}>
                    <p className="player_name">{player.playerName}</p>
                    <p className="player_score">{player.playerScore} pts</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="cardPlayer card-body">
          <img src={crown} alt="crown" className="player_crown" />
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon card-img-top" />
            {allPlayers
              .filter((player, index) => index == 0)
              .map((player, index) => {
                return (
                  <div className="player_cards" key={index}>
                    <p className="player_name">{player.playerName}</p>
                    <p className="player_score">{player.playerScore} pts</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="cardPlayer card-body">
          <img src={crown} alt="crown" className="player_crown" />
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon" />
            {allPlayers
              .filter((player, index) => index == 2)
              .map((player, index) => {
                return (
                  <div className="player_cards" key={index}>
                    <p className="player_name">{player.playerName}</p>
                    <p className="player_score">{player.playerScore} pts</p>
                  </div>
                );
              })}
          </div>
        </div>
      </article>

      <article>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Points</th>
            </tr>
          </thead>
          {allPlayers
            .filter((player, index) => index > 2 && index < 10)
            .map((player, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>
                      <p className="player_number">{index + 4}</p>
                    </td>
                    <td>
                      <div className="player_info">
                        <p className="player_name">{player.playerName}</p>
                      </div>
                    </td>
                    <td>{player.playerScore}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </article>
    </div>
  );
}

export default Leaderboard;
