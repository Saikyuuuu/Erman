import "./landing.css";
import { erman, erman_1, erman_2 } from "../../img/image.js";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar.tsx";
function App() {
  return (
    <>
      <div className="landing-page-container">
        <NavBar />
        <div className="name-text">
          <h1> ERMAN FAMINIANO</h1>
          <h1> ERMAN FAMINIANO</h1>
        </div>
        <div className="hero-img">
          <img src={erman} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
