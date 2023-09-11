import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Back_Icon from '../Components/Icons/Back_Icon'
import './ProjectInfo.css'
import RepoComments from '../Components/RepoComents/RepoComments'

const ProjectInfo = ({repos_url}) => {
  const { name } = useParams()


    const [projectInfo, setProjectInfo] = useState([])

    useEffect(() => {
      const fetchAPI = () => {
        fetch(repos_url)
          .then((res) => res.json())
          .then((json) => {
            setProjectInfo(json);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});
      };
  
      fetchAPI();
    }, []);

const project__data = projectInfo.filter((item) => {
  return item.name === name
})

  return (
    <div className="project__info">
        <NavLink to="/projects/">
          <Back_Icon />
        </NavLink>
        <h3>{project__data[0]?.name.toUpperCase().replace(/[-_]/g, ' ')}</h3>
        <h4>Descripción</h4>
        <p>
          {/* Tu descripción aquí */}
        </p>
        <div className="cell__image_content">
          <img
            className="phone__mockup"
            src="../src/Images/cellphone__template.png"
            alt="Phone Mockup"
          />
          <img
            className="project__image"
            src="https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg"
            alt="Project Image"
          />
        </div>
        {project__data[0]?.topics.length > 0 &&
          <div className="proyects-tags">
              {project__data[0]?.topics.map((item, index) => (
                <span key={`tag_key_${index}`}>{item}</span>
              ))}
          </div>
        }
        <div className="links_section">
          {project__data[0]?.html_url && <a href={project__data[0]?.html_url} target='_blank'>Código</a>}
          {project__data[0]?.homepage && <a href={project__data[0]?.homepage} target='_blank'>Demo</a>}
        </div>
        {project__data[0]?.name ? (
          <RepoComments
            comments_url={`https://api.github.com/repos/borgesmj/${project__data[0]?.name}/issues`}
            name={project__data[0]?.name}
          />
        ) : (
          <p>Loading...</p>
        )}

</div>

  )
}

export default ProjectInfo
