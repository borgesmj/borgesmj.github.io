import React from "react";
import './Resume.css'

const Resume = ({ english }) => {
  return (
    <a
      className="dowmload-link"
      href={
        english
          ? "https://borgesmj.github.io/cloud-storage/Miguel_Borges_en.pdf"
          : "https://borgesmj.github.io/cloud-storage/Miguel_Borges_es.pdf"
      }
      target="_blank"
    >
      {english ? "Download Resume" : "Descargar curriculum"}
    </a>
  );
};

export default Resume;
