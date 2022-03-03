import "./styles.css";
function Header() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src="./logo512.png" className="header-image"></img>
        <h1>ReactFacts</h1>
      </div>
      <h3>React Course-Project 1</h3>
    </nav>
  );
}

export default Header;
