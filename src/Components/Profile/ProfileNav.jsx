import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  const profileNavLinks = [
    {
      href: "/",
      name: "Stack",
    },
    {
      href: "/certificates/",
      name: "Certificates",
    },
    {
      href: "/work-together/",
      name: "Work with me",
    },
    {
      href: "/files/",
      name: "Download CV",
    },
  ];
  return (
    <ul className="absolute flex justify-between items-center top-[27rem] profile-nav border-b-solid border-b-[1px] border-b-accent-100 w-full md:w-[55%] lg:w-[45%] 2xl:w-[41%] 2xl:top-[30rem]">
      {profileNavLinks.map((item, index) => (
        <li
          key={`pnl_${index}`}
          className="px-4 mx-2 w-fit h-full flex justify-center items-center md:mx-0 md:px-2"
        >
          <NavLink
            to={item.href}
            className={({ isActive, isPending }) =>
              isPending ? "h-full w-20 flex justify-center items-center bg-[#ffffff] text-center text-xs" : isActive ? "h-full w-20 flex justify-center items-center border-b-[4px] border-b-solid border-b-primary-300 text-white text-center text-xs" : "h-full w-20 flex justify-center items-center border-b-[4px] border-b-solid border-b-transparent text-accent-100 text-center text-xs"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNav;
