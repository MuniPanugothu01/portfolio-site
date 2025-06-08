import React from "react";
// import the Link tag
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/About">About-Me</Link>
      <Link to="/Project">Projects</Link>
      <Link to="/Skills">Skills</Link>
      <Link to="/Contact">Contact-Me</Link>
    </>
  );
};

export default NavBar;
