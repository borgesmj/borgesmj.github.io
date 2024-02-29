import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto w-full p-4 ">
      <form className='flex flex-col justify-center items-center w-full px-0 py-4 m-0 mb-10 bg-accent-100 rounded-2xl'>
          <div className="campo">
            <input
              type="text"
              required
              id="nombre"
              autoComplete="off"
              name="user_name"
            //   onChange={(e) => setUserName(e.target.value)}
            //   value={userName}
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
            //   onChange={(e) => setUserEmail(e.target.value)}
            //   value={userEmail}
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
            //   onChange={(e) => setMessage(e.target.value)}
            //   value={message}
            ></textarea>
            <label htmlFor="textarea" className="label">
              Message
            </label>
          </div>
          <input
            type="submit"
            id="button"
            // value={sending ? "Enviando..." : "Enviar Mensaje"}
            className="button"
          />
        </form>
    </div>
  );
};

export default ContactForm;
