import React from "react";
import "./styles.css";
import ServicesImg from "../../assets/services.jpeg";
import ServicesImg2 from "../../assets/services-2.jpeg";
import ServicesImg3 from "../../assets/services-3.jpeg";

export default function Services() {
  return (
    <div className="services" id="servicos">
      <h3 className="services_title">Conheça nossos serviços</h3>
      <p className="services_subtitle">
        Temos o tipo de atendimento certo de acordo com a necessidade de cada um
      </p>

      <div className="service_box_container">
        <div className="services_box">
          <img className="services_image" src={ServicesImg} alt="" />
          <h4 className="services_box_title">Sessões de acolhimento</h4>
          <p className="services_box_subtitle">
            Sabemos que muitos adolescentes tiveram um desgaste emocional muito
            grande durante a pandemia, por perdas, conflitos familiares, entre
            outros. Para isso, oferecemos um ombro amigo, sessões com o intuito
            de promover condições para que seu sofrimento possa ser expresso.
          </p>
        </div>

        <div className="services_box">
          <img className="services_image" src={ServicesImg2} alt="" />
          <h4 className="services_box_title">Orientação vocacional</h4>
          <p className="services_box_subtitle">
            Você faz parte dos 99% dos adolescentes com incertezas sobre qual
            curso e caminho seguir? Te entendemos, mas não surta que também
            conseguimos te ajudar com isso! Oferecemos sessões de
            aconselhamentos no processo de escolha de profissão, para te
            auxiliar a fazer escolhas maduras e coerentes, ajustadas com seus
            interesses, aptidões e possibilidades.
          </p>
        </div>

        <div className="services_box">
          <img className="services_image" src={ServicesImg3} alt="" />
          <h4 className="services_box_title">
            Aconselhamento com rotina de estudos
          </h4>
          <p className="services_box_subtitle">
            Ficou perdido na escola durante a quarentena? Teve dificuldades para
            se adaptar ao EAD? Essa é a solução perfeita para te ajudar a
            reorganizar sua rotina e seguir firme nos estudos.
          </p>
        </div>
      </div>
    </div>
  );
}
