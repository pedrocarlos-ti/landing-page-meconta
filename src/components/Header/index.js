import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="navigation">
      <div className="navigation_img">
        <img className="navigation__logo" src={Logo} alt="Me Conta?" />
      </div>
      <nav>
        <ul className="navigation__menu__list">
          <li className="navigation__item">
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li className="navigation__item">
            <a href="#servicos">Serviços</a>
          </li>
          <li className="navigation__item">
            <a href="#time">Equipe</a>
          </li>
          <li className="navigation__item">
            <a href="#contato">Contato</a>
          </li>
          <li className="navigation__item">
            <button className="navigation__btn">Acesse já!</button>
          </li>
        </ul>
      </nav>
      <img
        className="navigation__menu"
        src="https://pics.freeicons.io/uploads/icons/png/15211315791553239378-512.png"
        alt="Me Conta?"
      />
    </div>
  );
}
