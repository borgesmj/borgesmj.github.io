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
    <div className="project card w-[14rem] rounded-xl border-white border-solid border-2 bg-[#f5f55f5] relative overflow-visible my-8 h-[15rem] md:w-48 md:h-[18rem] lg:h-[18rem]">
      <div class="card-details text-whitegap-2 flex flex-col md:max-h-4/5 md:overflow-y-hidden md:w-full h-full pb-4">
        <p class="text-title capitalize font-bold text-xl w-full text-center md:text-lg bg-primary-100 rounded-t-xl h-1/4 flex justify-center items-center">
          {repo_title.replace("-", " ")}
        </p>
        <p class="text-body h-3/4 px-2">{repo_description.length > 150 ? repo_description.slice(0,150) + "..." : repo_description }</p>
      </div>
      <button class="card-button w-3/5 rounded-2xl border-none bg-accent-100 text-white text-[1rem] py-2 px-4 absolute left-[22%] right-1/5 -bottom-[1.5rem] opacity-1 font-mono">
        More info
      </button>
    </div>
  );
};

export default Project;
