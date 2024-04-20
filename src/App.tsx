import "./App.css";
import LandingPage from "./assets//components/landing-page/landing-page";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./assets/components/about-page/about-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  );
}

export default App;
