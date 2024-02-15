
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
    <nav className="bg-background-100 w-dvw text-white py-4 px-2 bottom-0 left-0 border-t-[1px] border-t-white border-t-solid z-50 fixed md:left-0 md:h-9/10 md:w-fit md:top-8 md:bottom-8 md:border-r-[1px] md:border-r-solid md:border-r-white md:border-t-[0px] md:flex md:flex-col md:justify-center  font-mono">
      <ul className=" flex flex-row w-full h-full justify-between md:flex-col md:justify-around px-4 md:h-1/4 lg:h-1/3">
        {navLinks.map((item, index) => (
          <li key={index} className="lg:hover:bg-lightWhite md:p-2 rounded-xl">
            <a href={item.href} className="md:flex justify-start items-center w-full h-full">
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
