import React from "react";
import "./styles.css";

import FacebookIcon from "../../assets/facebook.png";
import LinkedinIcon from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="footer_title">Me conta?</h3>
      <p className="footer_subtitle">
        O Me Conta? é um projeto social sem fins lucrativos. Quer apoiar nossa
        ideia? Envie-nos um email para central@meconta.org
      </p>

      <div className="footer_social">
        <img className="footer_icon" src={FacebookIcon} alt="" />
        <img className="footer_icon separator" src={LinkedinIcon} alt="" />
        <img className="footer_icon" src={InstagramIcon} alt="" />
      </div>
    </div>
  );
}
