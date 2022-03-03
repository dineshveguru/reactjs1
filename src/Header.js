import "./styles.css";
function Header() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src="./logo512.png" className="header-image"></img>
        <h1 className="header-banner">ReactFacts</h1>
      </div>
      <p className="nav-banner">React Course-Project 1</p>
    </nav>
  );
}

export default Header;
