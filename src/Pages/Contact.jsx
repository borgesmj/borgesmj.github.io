import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = ({ english }) => {
  const [sending, setSending] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_dlmwhdk",
        "template_oeg299d",
        form.current,
        "NydoYd6k-fDjKaeCc"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            english
              ? "Thank you for your message! I will get back to you as soon as possible."
              : "Gracias por el mensaje, estaré en contacto contigo lo mas pronto posible"
          );
          setMessage("");
          setUserEmail("");
          setUserName("");
          setSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact__page">
      <div className="container">
        <h2>{english ? "Contact me" : "Contáctame"}</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="campo">
            <input
              type="text"
              required
              id="nombre"
              autoComplete="off"
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <label htmlFor="nombre" className="label">
              {english ? "nombre" : "name"}
            </label>
          </div>
          <div className="campo">
            <input
              type="text"
              required
              id="email"
              autoComplete="off"
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
            <label htmlFor="email" className="label">
              email:
            </label>
          </div>
          <div className="campo">
            <textarea
              name="message"
              id="mensaje"
              cols="30"
              rows="5"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <label htmlFor="textarea" className="label">
              Mensaje
            </label>
          </div>
          <input
            type="submit"
            id="button"
            value={sending ? "Enviando..." : "Enviar Mensaje"}
            className="button"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
