import React from "react";
import "./styles.css";

export default function Instagram() {
  return (
    <div className="instagram">
      <h4 className="instagram_title">Siga nosso Instagram!</h4>
      <p className="instagram_subtitle">
        Fique por dentro de todas as novidades!
      </p>

      <div className="instagram-box">
        <img
          src="https://labvital.com.br/wp-content/plugins/instagram-feed/img/thumb-placeholder.png"
          alt=""
        />
      </div>
    </div>
  );
}
