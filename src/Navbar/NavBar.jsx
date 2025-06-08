import React from "react";
// impoert the Link tag
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/About">About-Me</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Contact">Contact-Me</Link>
        
      </Nav>
    </>
  );
};

export default NavBar;
