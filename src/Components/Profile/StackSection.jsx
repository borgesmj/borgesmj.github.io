const StackSection = () => {
  const iconos = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCss",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "AstroJs",
  ];
  return (
    <div className="my-2 pt-2 w-full grid grid-cols-2 md:grid-cols-4 justify-items-center bg-background-300 rounded-xl mb-8">
      {iconos.map((item, index) => (
        <img
          key={`icono_${index}`}
          src={`/Stack-logos/${item}.webp`}
          alt={`${item}_icono`}
          className="w-16 p-2 md:w-24 md:p-4 md:mx-2 lg:w-20 lg:p-2"
        />
      ))}
    </div>
  );
};

export default StackSection;
