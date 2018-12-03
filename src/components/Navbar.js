import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-expand py-2">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item mr-4">
        <h1>Color Game</h1>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setSize.bind(this, 4)}
          className="btn btn-success"
        >
          4 x 4
        </button>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setSize.bind(this, 6)}
          className="btn btn-danger"
        >
          6 x 6
        </button>
      </li>
      <li className="nav-item mr-2">
        <button onClick={props.setSize.bind(this, 8)} className="btn btn-info">
          8 x 8
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
