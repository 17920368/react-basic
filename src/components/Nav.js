// import logo from "../logo192.png";
export function Navbar() {
  return (
    <nav className="nav">
      <li>
        <a href="https://reactjs.org/" className="nav__logo">
          <img src="./logo192.png" alt="React JS" />
        </a>
      </li>
      <li>
        <a href="#react">React</a>
      </li>
      <li>
        <a href="#components">Components</a>
      </li>
      <li>
        <a href="#elements">Elements</a>
      </li>
      <li>
        <a href="#props">Props</a>
      </li>
      <li>
        <a href="#state">State</a>
      </li>
    </nav>
  );
}
