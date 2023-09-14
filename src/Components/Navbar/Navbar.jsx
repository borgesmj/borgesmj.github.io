import React from "react";
import "./Navbar.css";
import English from "./English__icon";
import Espanol from "./Espanol__icon";
import Sun_Icon from "./Sun_Icon";
import MoonIcon from "./Moon_icon";

const Navbar = ({
  english,
  setEnglish,
  changeSidebarCheckboxValue,
  sidebarCheckbox,
  avatar,
  changeSocialSidebarCheckbox,
  socialSidebar,
  darkTheme,
  setDarkTheme,
  avatar_url,
}) => {
  const handleInputChange = () => {
    changeSidebarCheckboxValue();
  };

  const handleSocialChange = () => {
    changeSocialSidebarCheckbox();
  };

  const handleLanguageChange = () => {
    setEnglish(!english);
  };

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div id="navbar">
      <input
        type="checkbox"
        name=""
        id="navbar__checkbox"
        className="sidebar__checkbox"
        onChange={handleInputChange}
        checked={sidebarCheckbox}
      />
      <label htmlFor="navbar__checkbox" className="sidebar__burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="button__panel">
        <div className="button" onClick={handleLanguageChange}>
          {english ? <English /> : <Espanol />}
        </div>
        <div className="button" onClick={handleThemeChange}>
          {darkTheme ? <MoonIcon /> : <Sun_Icon />}
        </div>
      </div>
      <input
        type="checkbox"
        name=""
        id="socials_sidebar"
        className="socials_sidebar"
        onChange={handleSocialChange}
        checked={socialSidebar}
      />
      <label htmlFor="socials_sidebar" id="socials_btn">
        <img src={avatar_url} alt="" />
      </label>
    </div>
  );
};

export default Navbar;
