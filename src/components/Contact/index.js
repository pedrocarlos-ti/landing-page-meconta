import React from "react";
import "./styles.css";

export default function Contact() {
  return (
    <div className="contact">
      <h4 className="contact_title">Entre em contato</h4>
      <p className="contact_subtitle">
        Para dúvidas, sugestões ou reclamações, deixe sua mensagem no campo
        abaixo. Será um prazer te ajudar.
      </p>

      <form className="contact_box" action="#">
        <input
          className="contact_input mt"
          type="text"
          placeholder="Seu nome"
        />
        <input className="contact_input" type="email" placeholder="Seu email" />

        <textarea
          className="contact_message"
          rows="15"
          placeholder="Sua mensagem"
        ></textarea>

        <div className="contact_btn_container">
          <button className="contact_btn_send" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
