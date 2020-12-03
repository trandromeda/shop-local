import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { Search } from "src/components";

export function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="brand__logo">
          <p className="title">
            <Link to="/">Rouge</Link>
          </p>
          <p className="subtitle is-6">Shop Local Toronto</p>
        </div>
        <a
          role="button"
          className="navbar-burger is-white"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setMenuActive(!isMenuActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="mobile-only">
        <Search />
      </div>
      <div className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <div className="navbar-item is-expanded desktop-only">
            <Search />
          </div>
          <div className="navbar-item">
            <Link to="/about">About</Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/contribute" className="button is-white">
                Add shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
