import { useState } from "react";
import UserIcon from "../Icons/User";
import Projects from "../Icons/Projects";
import Briefcase from "../Icons/Briefcase";
import Contact from "../Icons/Contact";
import Blog from "../Icons/Pen";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <UserIcon />,
    },
    {
      name: "Work Experience",
      href: "/work-experience",
      icon: <Briefcase />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Projects />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <Blog />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Contact />,
    },
  ];

  return (
    <nav className="bg-background-100 w-dvw text-white py-4 px-2 bottom-0 left-0 border-t-[1px] border-t-white border-t-solid z-50 fixed md:left-0 md:h-9/10 md:w-fit md:top-8 md:bottom-8 md:border-r-[1px] md:border-r-solid md:border-r-white md:border-t-[0px] md:flex md:flex-col md:justify-center">
      <ul className=" flex flex-row w-full h-full justify-between md:flex-col md:justify-around px-4 md:h-1/2 lg:h-1/3">
        {navLinks.map((item, index) => (
          <li key={index} className="lg:hover:bg-lightWhite md:p-2 rounded-xl">
            <a href={item.href} className="md:flex justify-start items-center">
              <span className="md:hidden">{item.icon}</span>
              <span className="hidden md:block ml-4 text-accent-100">{index + 1}. {item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
