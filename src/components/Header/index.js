import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="navigation">
      <img className="navigation__logo" src={Logo} alt="Me Conta?" />
      <img
        className="navigation__menu"
        src="https://pics.freeicons.io/uploads/icons/png/15211315791553239378-512.png"
        alt="Me Conta?"
      />
    </div>
  );
}
