import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  const profileNavLinks = [
    {
      href: "/",
      name: "Stack",
    },
    {
      href: "/files/",
      name: "Downloads",
    },
    {
      href: "/certificates/",
      name: "Certificates",
    },
    {
      href: "/work-together/",
      name: "Work with me",
    },
  ];
  return (
    <ul className="absolute top-[27rem] flex flex-row w-fit">
      {profileNavLinks.map((item, index) => (
        <li
          key={`pnl_${index}`}
          className="px-4 w-fit"
        >
          <NavLink
            to={item.href}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#ff0000]" : ""
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
