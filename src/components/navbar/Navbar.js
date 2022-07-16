import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <ul className={"list"}>
        <li className={"items"}>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;