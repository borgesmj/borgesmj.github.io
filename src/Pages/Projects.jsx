import React, { useEffect, useState } from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const Projects = ({ repos_url, english, location}) => {
  const [repoData, setRepoData] = useState([]);
  const [loader, setLoader] = useState(false)
  const [url, setUrl] = useState('')


  useEffect(() => {
      setUrl(repos_url)
  },[repos_url])

  useEffect(() => {
    const fetchAPI = () => {
      setLoader(true)
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setRepoData(json);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoader(false)
        });
    };

    fetchAPI();
  }, [url]);

  const filteredRepos = repoData?.filter((item) => {
    return (
      item.name !== "30-Days-Of-JavaScript" &&
      item.name !== "50projects50days" &&
      item.name !== "aspirantes-mir-ejercicio-1" &&
      item.name !== "aspirantes-mir-ejercicioi-3" &&
      item.name !== "borgesmj" &&
      item.name !== "borgesmj.github.io" &&
      item.name !== "cloud-storage" &&
      item.name !== 'crear-multipage-vite' &&
      item.name !== 'kids-quiz' &&
      item.name !== 'Udemy-react' &&
      item.name !== 'course-Full-Stack-Open-2023-part-3' &&
      item.name !== 'course-Full-Stack-Open-2023' &&
      item.name !== 'retos-programacion-2023'
    );
  });

  const orderedRepos = filteredRepos.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return dateB - dateA;
  });

  return (
    <div className="projects__section">
      <h2>Projects</h2>
      {
        loader ?
        <Loader /> :  <>
        {orderedRepos?.map((item) => (
        <NavLink to={item.name} className="project__item" key={item.id}>
          <img
            src={`https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/${item.name}.jpeg`}
            alt=""
            className="project__img"
          />
          <div className="project__content">
            <h4>{item?.name.replace(/[-_]/g, " ").toUpperCase()}</h4>
            <p>
              {item.description
                ? english
                  ? item.description.split("//")[1]
                  : item.description.split("//")[0]
                : ""}
            </p>
          </div>
        </NavLink>
      ))}
        </>
      }
    </div>
  );
};

export default Projects;
