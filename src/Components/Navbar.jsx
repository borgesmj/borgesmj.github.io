
import {Briefcase, Contact, Pen, Projects, User } from '../Icons/Icons'

const Navbar = () => {


  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <User />,
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
      icon: <Pen />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Contact />,
    },
  ];

  return (
    <nav className="navbar bg-background-100 w-dvw text-white py-2 px-1 bottom-0 left-0 border-t-[1px] border-t-white border-t-solid z-50 fixed md:left-12 md:h-full md:w-fit md:top-0 md:bottom-8 md:border-r-[0px] md:border-r-solid md:border-r-none md:border-t-[0px] md:flex md:flex-col md:justify-center lg:left-16  font-mono xl:left-20 2xl:left-60 md:bg-background-300">
      <ul className=" flex flex-row w-full h-full justify-between md:flex-col md:justify-around px-0 md:h-1/4 lg:h-1/3">
        {navLinks.map((item, index) => (
          <li key={index} className=" flex justify-center items-center md:p-2 w-1/5 md:border-t-white md:border-t-solid md:border-t-[1px] md:w-full md:h-1/5 lg:relative">
            <a href={item.href} className="flex justify-center items-center md:flex md:justify-start w-full h-full">
              <span className="md:hidden">{item.icon}</span>
              <span className="hidden md:block ml-4 text-accent-100"><span className='font-bold text-white'>{index + 1}.</span> {item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
