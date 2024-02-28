
import {Briefcase, Contact, Pen, Projects, User } from '../Icons/Icons'

const Navbar = ({currentPath}) => {

console.log(currentPath)
  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <User />,
    },
    {
      name: "Work Experience",
      href: "/work-experience/",
      icon: <Briefcase />,
    },
    {
      name: "Projects",
      href: "/projects/",
      icon: <Projects />,
    },
    {
      name: "Blog",
      href: "/blog/",
      icon: <Pen />,
    },
    {
      name: "Contact",
      href: "/contact/",
      icon: <Contact />,
    },
  ];

  return (
    <nav className="navbar bg-background-100 w-dvw text-white py-2 px-1 bottom-0 left-0 z-50 fixed md:left-12 md:h-full md:w-[13rem] md:top-0 md:bottom-8 md:border-r-[1px] md:border-r-solid md:border-t-none md:border-accent-100 md:flex md:flex-col md:justify-center lg:left-20  font-mono xl:left-28 2xl:left-60">
      <ul className=" flex flex-row w-full h-full justify-between md:flex-col md:justify-around px-0 md:h-1/4 lg:h-1/3">
        {navLinks.map((item, index) => (
          <li key={index} className={`border-solid flex justify-center items-center md:p-2 w-1/5 ${currentPath === item.href ? "border-t-primary-100 border-t-[4px] md:border-l-[4px] md:border-l-primary-100" : "border-t-white border-t-[2px] md:border-l-transparent md:border-l-[4px]"} md:border-t-[0px] py-2  md:w-full md:h-1/5 lg:relative`}>
            <a href={item.href} className="flex justify-center items-center md:flex md:justify-start w-full h-full">
              <span className="md:hidden">{item.icon}</span>
              <span className={`hidden md:block ml-4 ${ currentPath === item.href ? "text-white" : "text-accent-100"}`}><span className='font-bold text-white'>{index + 1}.</span> {item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
