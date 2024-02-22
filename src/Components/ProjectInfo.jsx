import { Code_Icon, Play_Icon } from "../Icons/Icons";

const ProjectInfo = ({ data, name }) => {
    const projectData = data.filter((item) => {
      return item.name === name;
    });


  const formatDate = (date) => {
    date = new Date(date);

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="w-[90%] project mt-8 px-4 py-8 flex flex-col justify-between mb-4 rounded-lg md:w-[95%] my-0 mx-auto lg:border-solid lg:border-white lg:border-[1px] lg:w-[25rem] xl:w-[30rem] 2xl:w[35rem]]">
      <p className="my-2">
        <span className="font-bold">Created at: </span>
        {formatDate(projectData[0]?.created_at)}
      </p>
      <p className="my-2">
        <span className="font-bold">Last update:</span>{" "}
        {formatDate(projectData[0]?.updated_at)}
      </p>
      <div className="my-2 flex flex-row justify-around items-center text-sm font-medium">
        <a
          href={projectData[0]?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-button flex flex-row items-center border-white border-[1px] border-solid rounded-xl p-1"
        >
          Code
          <Code_Icon />
        </a>
        <a
          href={projectData[0]?.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-button flex flex-row items-center border-white border-[1px] border-solid rounded-xl p-1 "
        >
          Demo
          <Play_Icon />
        </a>
      </div>
      <p>{projectData[0]?.description}</p>
      <div className="w-full flex flex-col  my-2 max-w-full">
        <p>Tags:</p>
        <p className="flex flex-wrap justify-around py-2">
          {projectData[0]?.topics?.map((item) => (
            <span className="py-2 px-4 border-white border-solid border-[0.5px] rounded-full my-2">
              {item}
            </span>
          ))}
        </p>
      </div>
      <div className="relative w-full h-40 flex justify-center mb-4">
        <img
          src={`https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/${projectData[0]?.name}.jpeg` || `https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/${projectData[0]?.name}.webp`}
          alt={projectData[0]?.name}
          className="absolute top-0 h-44 w-24 rounded-lg"
        />
        <img
          src="https://borgesmj.github.io/cloud-storage/cellphone__template.png"
          alt=""
          className="absolute -top-8 h-60 w-60"
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
