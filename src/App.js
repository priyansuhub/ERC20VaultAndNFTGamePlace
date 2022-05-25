import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Marketplace from "./components/store/Marketplace";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/store" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
