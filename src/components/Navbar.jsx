import "./../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Veloxy</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
