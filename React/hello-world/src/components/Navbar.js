

function Navbar() {
  const handleMouseOver = (e) => {
    e.target.style.color = "#FFD700"; 
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "white"; 
  };
  return (
    <>
      <div>
        <nav
          style={{ backgroundColor: "black" }}
          className="navbar navbar-expand-lg navbar-light "
        >
          <div className="container-fluid">
            <a className="navbar-brand" style={{ color: "#FFD700" }} href="/">
              <h2>PORTFOLIO</h2>
            </a>
            <button style={{color:'white', backgroundColor:'yellow'}}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              style={{ marginLeft: "800px" }}
              className="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#home"
                    style={{ color: "white" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#about" onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#contact" onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#project" onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
