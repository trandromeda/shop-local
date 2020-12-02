import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2020 Andy Tran. Last updated: Nov 30, 2020</p>
      <div className="footer__aside">
        <Link to="/contact">Contact</Link>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
