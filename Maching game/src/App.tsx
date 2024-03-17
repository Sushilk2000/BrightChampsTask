import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontPage from "./frontpage";
import Nextpage from "./nextPage";
import Intro3 from "./intro3";
import InstructionsPage from "./instructionPage";
import GamingWindow from "./Game";
import GameOver from "./gameOver";
import GameCompleted from "./gameCompleted";
import BackgroundPage from "./background";
function App() {
  return (
    <>
      <Router>
        <BackgroundPage />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/nextpage" element={<Nextpage />} />
          <Route path="/intro3" element={<Intro3 />}></Route>
          <Route path="/instructions" element={<InstructionsPage />}></Route>
          <Route path="/game" element={<GamingWindow />}></Route>
          <Route path="/gameover" element={<GameOver />}></Route>
          <Route path="/gameCompleted" element={<GameCompleted />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
