import React from "react";
import "./styles.css";

export default function Team() {
  return (
    <div className="team" id="time">
      <div className="team_box">
        <h3 className="team_title">Conheça nossa equipe</h3>
        <p className="team_subtitle">
          Nossa equipe está preparada para lhe ajudar!
        </p>
        <div className="avatar-box">
          <div className="avatar-box-info">
            <img
              className="avatar-image"
              src="data:image/jpeg;base64,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"
              alt="avatar"
            />
            <p className="team-name">Amanda Santos</p>
            <p className="team-work">Psicologa dos doidos</p>
          </div>

          <div className="avatar-box-info">
            <img
              className="avatar-image"
              src="https://duetaz.org/wp-content/uploads/2018/02/placeholder-man-300x300.jpg"
              alt="avatar"
            />
            <p className="team-name">Pedro Santos</p>
            <p className="team-work">Psicologo dos sábios</p>
          </div>

          <div className="avatar-box-info block">
            <img
              className="avatar-image"
              src="https://duetaz.org/wp-content/uploads/2018/02/placeholder-man-300x300.jpg"
              alt="avatar"
            />
            <p className="team-name">Pedro Santos</p>
            <p className="team-work">Psicologo dos sábios</p>
          </div>

          <div className="avatar-box-info block">
            <img
              className="avatar-image"
              src="https://duetaz.org/wp-content/uploads/2018/02/placeholder-man-300x300.jpg"
              alt="avatar"
            />
            <p className="team-name">Pedro Santos</p>
            <p className="team-work">Psicologo dos sábios</p>
          </div>
        </div>

        <div className="team-dots">
          <span className="dots" />
          <span className="dots" />
          <span className="dots" />
        </div>

        <div className="team-btn-container">
          <button className="team-btn">Conheça toda a equipe</button>
        </div>
      </div>
    </div>
  );
}
