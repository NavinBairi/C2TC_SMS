import React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(
    () => {
      document.title = "Home"
    },
    []
  );
  return (

    <div className="header">


      <ul className="nav-menu">

        <li>
          <Link  to="/" action> Home </Link>
        </li>

        <li>
          <Link  to=" /menu" action> Menu</Link>


        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>





    </div>
  )
}


export default Navbar;