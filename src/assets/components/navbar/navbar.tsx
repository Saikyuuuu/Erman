import "./navbar.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contact</Link>
        </ul>
      </div>{" "}
    </>
  );
}

export default App;
