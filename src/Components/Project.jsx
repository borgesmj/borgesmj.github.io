const Project = ({
  repo_title,
  repo_description,
}) => {

  return (
    <div className="project card w-[14rem] rounded-xl border-white border-solid border-2  relative overflow-visible my-8 h-fit md:w-[45%] lg:w-[45%] flex flex-col items-center justify-start">
      <div className="card-details text-whitegap-2 flex flex-col md:max-h-4/5 md:overflow-y-hidden md:w-full h-full pb-4">
        <p className="text-title capitalize font-bold text-xl w-full text-center md:text-lg bg-primary-100 rounded-t-xl h-16 flex justify-center items-center">
          {repo_title.replace(/-/g, " ")}
        </p>
        <p className="text-[18px] leading-6 h-56 px-2 pb-2 md:text-[15px] xl:text-[20px] 2xl:text-[20px] p-4 md:h-48">{repo_description.length > 150 ? repo_description.slice(0,150) + "..." : repo_description }</p>
      </div>
      <a className="card-button w-3/5 rounded-2xl border-none bg-accent-100 text-white text-[1rem] py-2 px-4 right-1/5  opacity-1 font-mono absolute -bottom-4 mx-auto" href={`/projects/${repo_title}`}>
        More info
      </a>
    </div>
  );
};

export default Project;
