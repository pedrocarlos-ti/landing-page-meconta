import React from "react";
import "./styles.css";
import WHO_1 from "../../assets/who.jpeg";
import WHO_2 from "../../assets/who-2.jpeg";

export default function WhoWeAre() {
  return (
    <div className="who">
      <h3 className="who__title">Quem somos?</h3>
      <p className="who__subtitle">
        A Me Conta? surgiu com o propósito de garantir que jovens do ensino
        médio tenham acesso a um suporte psicológico e emocional gratuito e de
        qualidade, sem precisar sair de casa. Nossa missão é tornar o sistema
        educacional menos estressante e mais acolhedor.
      </p>

      <img src={WHO_1} alt="" />
      <h3 className="who__title">
        O atendimento é prestado por alunos de psicologia voluntários
      </h3>
      <p className="who__subtitle">
        A Me Conta? também surgiu para ajudá-los nesse processo de adquirir
        experiência antes de ingressarem no mercado de trabalho. Oferecemos
        certificado e mentoria.
      </p>

      <img src={WHO_2} alt="" />
      <h3 className="who__title">Consultas discretas e online</h3>
      <p className="who__subtitle">
        Nosso atendimento é gratuito e individualizado, feito 100% online e se
        adequa a realidade de cada pessoa
      </p>
    </div>
  );
}
