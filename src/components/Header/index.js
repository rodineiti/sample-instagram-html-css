import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src="img/instagram-logo.svg" alt="instagram" title="instagram" />
        </div>
        <div className="header__send">
          <i className="fa fa-paper-plane" />
        </div>
      </div>
    </header>
  );
}
