import React from "react";
import "./styles.css";
import HeroImage from "../../assets/hero.jpeg";

export default function Hero() {
  return (
    <div className="hero">
      <h3 className="hero__title ">
        Mais que uma plataforma:{"\n"}um propósito!
      </h3>
      <p className="hero__subtitle ">
        Ajudando jovens alunos a superar seus desafios para chegar mais longe!
      </p>

      <button className="hero__btn">Acesse já!</button>

      <img className="hero__img" src={HeroImage} alt="" />
    </div>
  );
}
