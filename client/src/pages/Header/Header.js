import "./Header.scss";
import { Router, Link } from "react-router-dom";

function Header() {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      {/* <Link to="/create-poll">Create New Poll</Link> */}
      <Link to="/vote">Vote</Link>
      <Link to="/results">Results</Link>
      <Link to="/404">404</Link>
    </div>
  );
}

export default Header;
