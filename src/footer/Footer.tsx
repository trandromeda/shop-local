import React from "react";
import "./Footer.scss";

function Footer() {
  const email = "transient.tran@gmail.com";
  const params = "?subject=Rouge App";
  return (
    <div className="footer">
      <p>Copyright © 2020 Andy Tran</p>
      <a href={`mailto:${email}${params}`}>Contact</a>
    </div>
  );
}

export default Footer;
