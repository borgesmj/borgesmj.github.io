import React from "react";
import "./Certificados.css";
import NewTab from "../Icons/NewTab";

const Certificados = ({ english }) => {
  const certificados = [
    {
      name: "English level test, by EF",
      link: "https://www.efset.org/cert/uGmFbo",
    },
    {
      name: "JavaScript Algorithms and Data Structures, by FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/borgesmj19/javascript-algorithms-and-data-structures",
    },
    {
      name: "Responsive Web Design, by FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/borgesmj19/responsive-web-design",
    },
  ];
  return (
    <div className="certificados_Seccion">
      <h3>{english ? "Certificates" : "Certificados"}</h3>
      <ul className="certificados">
        {certificados.map((item, index) => (
          <li key={index}>
            <a target="_blank" href={item.link}>
              {item.name}
            </a>{" "}
            <NewTab />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificados;
