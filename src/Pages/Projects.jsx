import React, { useEffect, useState } from 'react'
import './Projects.css'
import { NavLink } from 'react-router-dom'

const Projects = ({repos_url}) => {
  

  const [repoData, setRepoData] = useState([])

  useEffect(() => {
    const fetchAPI = () => {
      fetch(repos_url)
        .then((res) => res.json())
        .then((json) => {
          setRepoData(json);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    };

    fetchAPI();
  }, []);

  const filteredRepos = repoData?.filter((item) => {
    return (
      item.name !== '30-Days-Of-JavaScript' &&
      item.name !== '50projects50days' &&
      item.name !== 'aspirantes-mir-ejercicio-1' &&
      item.name !== 'aspirantes-mir-ejercicioi-3' &&
      item.name !== 'borgesmj' &&
      item.name !== 'borgesmj.github.io' &&
      item.name !== 'cloud-storage'

      )
  })

  const orderedRepos = filteredRepos.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    
    return dateB - dateA;
  });
  

  return (
    <div className='projects__section'>
      <h2>Projects</h2>
      {orderedRepos?.map((item) => (
        <NavLink to={item.name} className="project__item" key={item.id}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png" alt="" className="project__img" />
        <div className="project__content">
          <h4>{item?.name.replace(/[-_]/g, ' ').toUpperCase()}</h4>
          <p>{item.description ? (item.description.slice(0, 50) + (item.description.length > 50 ? '...' : '')) : ''}</p>
        </div>
      </NavLink>
      ))}
    </div>
  )
}

export default Projects
