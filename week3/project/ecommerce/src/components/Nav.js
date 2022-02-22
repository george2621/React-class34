import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ product }) => {
  return (
    <nav>
      <h1>{product}</h1>
      <div>
        <Link className="link-item" to="/">
          Products
        </Link>
        <Link className="link-item" to="/favorites">
          favorites
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
