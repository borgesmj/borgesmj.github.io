import React, { useState } from "react";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e) => {
    let phoneNumber = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(phoneNumber)){
      setUserPhone(phoneNumber)
    }
  }

  const handleSend = (e) => {
    e.preventDefault();
    let WaMessage = `Hola, Miguel, mi nombre es ${userName}\n\n${message}\n\nNumero de contacto: ${userPhone}
    `

    let WhatsAppLink = "https://api.whatsapp.com/send?phone=573205092268&text=" + encodeURI(WaMessage);
    window.open(WhatsAppLink, "_blank");
    setUserName("");
    setUserPhone("");
    setMessage("");
  };

  return (
    <div className="mx-auto w-full p-4 ">
      <form onSubmit={handleSend}>
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
            Name
          </label>
        </div>
        <div className="campo">
          <input
            type="text"
            required
            id="email"
            autoComplete="off"
            name="user_email"
            onChange={handlePhoneChange}
            value={userPhone}
          />
          <label htmlFor="email" className="label">
            Phone number:
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
            Message
          </label>
        </div>
        <input type="submit" id="button" value="Send" className="button" />
      </form>
    </div>
  );
};

export default ContactForm;
