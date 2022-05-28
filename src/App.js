import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Marketplace from "./components/store/Marketplace";
import { ConnectMetamask } from "./context/ConnectMetamask";
import { ContractProvider } from "./context/ContractContext";
function App() {
  return (
    <BrowserRouter>
      <ConnectMetamask>
        <ContractProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/store" element={<Marketplace />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ContractProvider>
      </ConnectMetamask>
    </BrowserRouter>
  );
}

export default App;
