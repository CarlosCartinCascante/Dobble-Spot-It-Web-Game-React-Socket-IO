import React from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import NavBar from "./components/header/NavBar/Navbar";
import Home from "./components/main/Home/Home";
import Help from "./components/main/Help/Help";
import HowToPlay from "./components/main/HowToPlay/Howtoplay";
import Leaderboard from "./components/main/Leaderboard/Leaderboard";
import AboutUs from "./components/main/AboutUs/About";
import WaitingRoom from "./components/main/Home/Game/WaitingRoom/Waiting";
import Game from "./components/main/Home/Game/GameRoom/GameNTimer";
import GameOver from "./components/main/Home/Game/GameOver/GameOver";
import PlayerForm from "./components/main/Home/Game/PlayerForm/PlayerForm";
import CreateRoom from "./components/main/Home/Game/CreateRoom/CreateRoom";
import JoinRoom from "./components/main/Home/Game/JoinRoom/JoinRoom";

const App = () => {
  const location = useLocation();
  const isPlayerFormRendering = location.pathname === "/playerform";
  const isWaitingRendering = location.pathname === "/waiting";
  const isGameRendering = location.pathname === "/game";
  const isGameOverRendering = location.pathname === "/gameover";
  const isCreateRoomRendering = location.pathname === "/createroom";
  const isJoinRoomRendering = location.pathname === "/joinroom";
  return (
    <div>
      {!isCreateRoomRendering && !isWaitingRendering && 
      !isGameRendering && !isGameOverRendering && 
      !isPlayerFormRendering && !isJoinRoomRendering &&
      <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/playerform" element={<PlayerForm />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/joinroom" element={<JoinRoom />} />
      </Routes>
    </div>
  );
};

export default App;
