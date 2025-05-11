import { Link } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";

export default function Header() {
  return (
    <>
      <div>
        <h1>Trip App with Security</h1>
      </div>
      <div id="navbar">
        <div>
          <nav >
            <Link to="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link to="/trips" style={{ marginRight: "1rem" }}>
              Trips
            </Link>
            <Link to="/guides">Guides</Link>
          </nav>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
