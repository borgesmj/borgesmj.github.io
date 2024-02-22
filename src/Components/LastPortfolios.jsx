import React from "react";

const portfolioVersions = [
  {
    name: "1st version",
    href: "https://borgesmj-portfolio-v1.netlify.app/",
  },
  {
    name: "2nd version",
    href: "https://borgesmj-portfolio-v2.netlify.app/",
  },
  {
    name: "3rd version",
    href: "https://borgesmj-portfolio-v3.netlify.app/",
  },
];

const LastPortfolios = () => {
  return (
    <div className="w-full flex flex-col border-b-solid border-b-[1px] border-b-white py-2">
      <h2 className="w-full text-center text-[16px] font-bold">
        Last versions of my portfolio:
      </h2>
      <ul className="mb-2">
        {portfolioVersions.map((item, index) => (
          <li className="lg:p-0 lg:w-full lg:h-full lg:text-[14px] lg:flex lg:items-center m-0 mt-1 mb-1">
            <a href={item.href} className="lg:hover:underline" key={index} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastPortfolios;
