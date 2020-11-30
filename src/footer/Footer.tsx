import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const email = "transient.tran@gmail.com";
  const params = "?subject=Rouge App";
  return (
    <div className="footer">
      <p>Copyright © 2020 Andy Tran. Last updated: Nov 30, 2020</p>
      <div className="footer__aside">
        <a href={`mailto:${email}${params}`}>Contact</a>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
