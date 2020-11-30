import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <h1 className="title">
        <Link to="/">Rouge</Link>
      </h1>
      <h2 className="subtitle">Shop Local Toronto</h2>
    </div>
  );
}

export default Navbar;
