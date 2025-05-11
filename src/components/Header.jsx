import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <h1>Trip App with Security</h1>
      </div>
      <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/trips" style={{ marginRight: "1rem" }}>
          Trips
        </Link>
        <Link to="/guides">Guides</Link>
      </nav>
    </>
  );
}
