import React from "react";
import "./Contact.css";

const Contact = ({ english }) => {
  return (
    <div className="contact__page">
      <div className="container">
        <h2>{english ? "Contact me" : "Contáctame"}</h2>
        <form action="">
          <div className="campo">
            <input type="text" required id="nombre" autoComplete="off" />
            <label htmlFor="nombre" className="label">{english ? "nombre" : "name"}</label>
          </div>
          <div className="campo">
            <input type="text" required id="email" autoComplete="off" />
            <label htmlFor="email" className="label">email:</label>
          </div>
          <div className="campo">
            <textarea
              name=""
              id="textarea"
              cols="30"
              rows="5"
              required
            ></textarea>
            <label htmlFor="textarea" className="label">Mensaje</label>
          </div>
          <button>{english ? "Send Message" : "Enviar Mensaje"}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
