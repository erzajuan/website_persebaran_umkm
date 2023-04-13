import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { loginCbHandler } = props;

  const logoutUser = async () => {
    try {
      localStorage.removeItem('access_token')
      loginCbHandler(false);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    logoutUser();
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar bg="success gradient" expand="md">
        <Navbar.Toggle onClick={handleToggle} aria-controls="navbar-collapse" />
        <Link to="/" className="title-font" style={{ textDecoration: "none" }}>
          SME Hub
        </Link>
      </Navbar>

      <div className={`external-content ${expanded ? "show" : ""}`}>
        <div class="d-flex flex-wrap">
        <Nav className="me-auto">
          <Nav.Link href="#" className="link-font">
            Profile
          </Nav.Link>
          <Nav.Link href="#" className="link-font">
            Menu
          </Nav.Link>
          
        </Nav>
        <Nav >
        <Nav.Link href="/" className="link-font ml-auto" onClick={() => logoutHandler()}>
            Log Out
          </Nav.Link>
        </Nav>
        </div>
        
      </div>
    </div>
  );
};

export default MainNavbar;
