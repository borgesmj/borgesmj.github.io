const DownloadsSection = () => {
  const languages = [
    {
      language: "en",
      text: "Resume English version",
    },
    {
      language: "es",
      text: "Resume Spanish Version",
    },
  ];

  return (
    <div className="my-2 py-2 w-full flex flex-col items-center md:flex-row md:justify-between md:items-start ">
      {languages.map((item) => (
        <a
          href={`/files/Miguel_Borges_${item.language}.pdf`}
          className="w-1/2 flex flex-col items-center text-center mb-2 md:w-2/5"
          target="_blank"
          key={`languaje_${item.language}`}
        >
          <img
            className="aspect-square"
            src={`/files/Miguel_Borges_${item.language}.webp`}
            alt=""
          />
          <span>{item.text}</span>
        </a>
      ))}
    </div>
  );
};

export default DownloadsSection;
