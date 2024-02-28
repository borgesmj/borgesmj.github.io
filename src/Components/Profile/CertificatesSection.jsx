const CertificatesSection = () => {
  const certificates = [
    {
      name: "Responsive Web Design",
      src: "https://www.freecodecamp.org/certification/borgesmj19/responsive-web-design",
      by: "FreeCodeCamp",
    },
    {
      name: "Javascript Algorithms and Data Structures",
      src: "https://www.freecodecamp.org/certification/borgesmj19/javascript-algorithms-and-data-structures",
      by: "FreeCodeCamp",
    },
    {
      name: "Taller de Figma",
      src: "https://cursos.desafiolatam.com/certificates/fufwc9p2lr",
      by: "Desafio Latam",
    },
    {
      name: "English for Developers & IT Profesionals",
      src: "https://cursos.desafiolatam.com/certificates/sdydbgbmfq",
      by: "Desafio Latam",
    },
  ];
  return (
    <div className="my-2 py-2 w-full flex flex-wrap gap-4 justify-center md:justify-between lg:justify-around">
      {certificates.map((item) => (
        <a
          href={item.src}
          className="w-1/2 flex flex-col items-center text-center mb-2 md:w-2/5"
          target="_blank"
          key={`certificate_${item.name.replace(/\s+/g, '-')}`}
        >
          <img
            className="aspect-square"
            src={`/Certificates-images/${item.name.replace(/\s+/g, '-')}.webp`}
            alt={item.name}
          />
          <p><strong>{item.name}</strong></p>
          <p>by: <strong>{item.by}</strong></p>
        </a>
      ))}
    </div>
  );
};

export default CertificatesSection;
