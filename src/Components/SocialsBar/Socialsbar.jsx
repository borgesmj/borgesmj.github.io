import React from "react";
import Github_icon from "../Icons/Github_icon";
import { NavLink } from "react-router-dom";
import Certificados from "../Certificados/Certificados";
import "./SocialsBar.css";
import Resume from "../Resume/Resume";

const Socialsbar = ({
  changeSocialSidebarCheckbox,
  socialSidebar,
  profileInfo,
  english,
}) => {

  return (
    <div className="socials__sidebar">
      <input
        type="checkbox"
        name=""
        id="socials_panel_checkbox"
        checked={socialSidebar}
        readOnly
      />
      <div className="socials_panel">
        <h2>
          {english ? (
            <>
              Github Profile <Github_icon />
            </>
          ) : (
            <>
              Perfil de GitHub <Github_icon />
            </>
          )}
        </h2>
        <div className="github__data">
          <NavLink href="/projects/" onClick={changeSocialSidebarCheckbox}>
            <span>{profileInfo?.public_repos}</span>
            <span>{english ? 'Repositories' : 'Repositorios'}</span>
          </NavLink>
          <a
            href="https://github.com/borgesmj?tab=followers"
            target="_blank"
            onClick={changeSocialSidebarCheckbox}
          >
            <span>{profileInfo?.followers}</span>
            <span>{english ? 'Followers' : 'Seguidores'}</span>
          </a>
          <a
            href="https://github.com/borgesmj?tab=following"
            target="_blank"
            onClick={changeSocialSidebarCheckbox}
          >
            <span>{profileInfo?.following}</span>
            <span>{english ? 'Following' : 'Seguidos'}</span>
          </a>
        </div>
      <Certificados
        english={english}
      />
      <Resume
        english={english}
      />
      </div>
    </div>
  );
};

export default Socialsbar;
Socialsbar;
