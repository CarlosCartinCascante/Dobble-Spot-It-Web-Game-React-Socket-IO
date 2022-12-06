import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";

import { socket } from "../../PlayerForm/PlayerForm";

function Timer() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(30000);
  socket.on("gameTime", (data) => {
    setTimer(data);
  });
//-------------------------------------------Start Timer-------------------------------------------
  const renderer = ({minutes, seconds, completed }) => {
    if (completed) {
      navigate("/gameover");
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
//------------------------------------------- End Timer-------------------------------------------
  return (
    <>
      <div className="timer_container">
        <div className="timer">
          <h2>
            <Countdown date={Date.now() + timer} renderer={renderer} />
          </h2>
        </div>
      </div>
    </>
  );
}

export default Timer;
