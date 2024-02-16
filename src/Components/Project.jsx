import { useState } from "react";
import { Play_Icon, Code_Icon } from "../Icons/Icons";

const Project = ({
  repo_title,
  repo_description,
  repo_homepage,
  repo_html_url,
  topics,
  created_at,
  updated_at,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date) => {
    date = new Date(date);

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="project border-accent-100 border-solid border-2 p-4 rounded-2xl flex flex-col items-center md:flex-row lg:w-full  mt-8">
      <img
        src={`https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/${repo_title}.jpeg`}
        alt={repo_title}
        className="h-40 w-auto my-6 md:h-48 md:mx-2 rounded-xl lg:h-36 border-solid border-[1px] border-white"
        onError={(e) => {
          e.target.onError = null;
          e.target.src = "/no-image.webp";
          e.target.alt = "no image available";
        }}
      />
      <div>
        <p class="font-bold w-full md:w-3/4 text-center text-xl capitalize">
          {repo_title.replace("-", " ")}
        </p>
        <p class="w-full md:w-full text-rigth my-4 lg:w-[70%] lg:ml-8 font-mono text-[0.8rem]">
          {repo_description}
        </p>
        <div className="w-full flex flex-col justify-between items-center md:flex-row lg:w-full lg:justify-around xl:w-full">
          <a
            href={repo_html_url}
            className=" mt-2 text-center text-accent-100 text-sm lg:text- flex flex-row items-center justify-between border-solid border-[1px] border-accent-100 p-2 w-1/2 md:w-1/3 rounded-xl md:my-4 md:mx-2 md:p-2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            target = 'blank'
          >
            Code <Code_Icon isHovered={isHovered} />
          </a>
          <a
            href={repo_homepage}
            className=" mt-2 text-center text-accent-100 text-sm lg:text- flex flex-row items-center justify-between border-solid border-[1px] border-accent-100 p-2 w-1/2 md:w-1/3 rounded-xl md:my-4 md:mx-2 md:p-2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            target = 'blank'
          >
            Demo <Play_Icon isHovered={isHovered} />
          </a>
        </div>
        <div className="w-full grid grid-cols-2  grid-rows-2 justify-items-center my-2">
          {topics?.map((topic, index) => (
            <span
              key={`topic_${index}`}
              className="bg-primary-200 p-[5px] rounded-lg text-text-200 uppercase text-[10px] h-fit my-[5px]"
            >
              {topic.slice(0, 10)}
            </span>
          ))}
        </div>
        <div className="w-full flex flex-col justify-between items-center md:flex-row lg:w-full lg:justify-around xl:w-full">
          <p className="font-mono text-[0.5rem]">
            Created at <span>{formatDate(created_at)}</span>
          </p>
          <p className="font-mono text-[0.5rem]">
            Last Update <span>{formatDate(updated_at)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
