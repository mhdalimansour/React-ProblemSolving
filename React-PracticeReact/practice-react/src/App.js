import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Problem from "./components/Problem";
import CountryCapitalGame from "./components/problems/CountryCapitalGame.tsx";
import TapCircles from "./components/problems/TapCircles";
import HomePage from "./pages/HomePage";
import PracticePage from "./pages/PracticePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/problems" element={<PracticePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/problems/:slug" element={<Problem />} />
        <Route path="test" element={<CountryCapitalGame />} />
        <Route path="/tap" element={<TapCircles />} />
      </Routes>
    </Router>
  );
}

export default App;
