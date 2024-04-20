import "./landing.css";
import erman from "../../img/erman.png";
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
