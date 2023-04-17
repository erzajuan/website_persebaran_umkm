import { Navbar, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getUserDetail } from "../fetchs/userFetch";

import { Link } from "react-router-dom";

const MainNavbar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [umkm, setUmkm] = useState(["null"]);

  const { loginCbHandler } = props;

  useEffect(() => {
    getUserDetail(
      (result) => setUmkm(result.umkm.id),
      localStorage.getItem("access_token")
    );
  });
  const logoutUser = async () => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("userId");
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
        <Link to="/" className="title-font logo-font" style={{ textDecoration: "none" }}>
          SME Hub
        </Link>
      </Navbar>

      <div className={`external-content ${expanded ? "show" : ""}`}>
        <div className="d-flex flex-wrap">
          <Nav className="me-auto">
            <Link
              to="/profile"
              className="link-font"
              style={{ textDecoration: "none" }}
            >
              My Profile
            </Link>
            <Link
              to={`myumkm/${umkm}`}
              className="link-font"
              style={{ textDecoration: "none" }}
            >
              My UMKM
            </Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="/"
              className="link-font ml-auto"
              onClick={() => logoutHandler()}
            >
              Log Out
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
