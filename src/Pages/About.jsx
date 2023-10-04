import "./About.css";
import NewTab from '../Components/Icons/NewTab'

const About = ({ english }) => {
  const bio = [
    "Durante los últimos 5 años, he tenido la oportunidad de vivir en Colombia, específicamente en Medellín, Antioquia, junto con mi familia: mi esposa y nuestra hija de 5 años. Me gradué como Ingeniero Mecánico en 2015 y pronto me embarqué en mi primera experiencia laboral en una empresa petrolera, donde desempeñé el cargo de Inspector QA/QC durante dos años. // A mediados del año 2022, mi interés por el desarrollo web comenzó a florecer. A medida que 2022 llegaba a su fin, tomé la decisión de capacitarme en diversas áreas. En 2023, he invertido la mayor parte de mi tiempo en lecciones de YouTube y FreeCodeCamp, así como en la creación de pequeños proyectos para practicar. // Me he inclinado hacia el Front End debido a mi fascinación por el diseño y la interacción con el usuario, aunque también tengo un interés en las bases de datos. Mi objetivo a largo plazo es convertirme en un desarrollador FullStack. Aunque todavía estoy en proceso de aprendizaje, estoy emocionado por seguir descubriendo nuevas herramientas y tecnologías para mejorar mis habilidades en el desarrollo web.",
    "Over the past 5 years, I've had the opportunity to live in Colombia, specifically in Medellín, Antioquia, with my family—my wife and our 5-year-old daughter. I graduated as a Mechanical Engineer in 2015 and soon embarked on my first job experience in a petroleum company, where I worked as a QA/QC Inspector for two years. // In mid-2022, my interest in web development began to grow. As 2022 came to a close, I made the decision to delve into various areas. In 2023, I've dedicated most of my time to YouTube tutorials and FreeCodeCamp, as well as creating small projects for practice. // I've leaned towards Front End development due to my fascination with design and user interaction. However, I also have an interest in databases. My long-term goal is to become a FullStack developer. Although I'm still in the learning process, I'm excited to continue discovering new tools and technologies to enhance my web development skills.",
  ];

  const paragraphs = english ? bio[1].split("//") : bio[0].split("//");

  return (
    <div className="about__page">
      <h2>{english ? "About" : "Acerca"}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
      ))}
      <a
        href={
          english
            ? "https://github.com/borgesmj/borgesmj/blob/en-US/README.md#hello-welcome-"
            : "https://github.com/borgesmj/borgesmj/blob/ES/README.md#hola-bienvenido-"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {english ? "See more" : "Ver mas"} {<NewTab/>}
      </a>
    </div>
  );
};

export default About;
