import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Back_Icon from '../Components/Icons/Back_Icon'
import './projectInfo.css'
import RepoComments from '../Components/RepoComents/RepoComments'

const projectInfo = () => {
  const { name } = useParams()


    const [projectInfo, setProjectInfo] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
      setUrl(`https://api.github.com/repos/borgesmj/${name}`)
  },[name])

    useEffect(() => {
      console.log(url)
      const fetchAPI = () => {
        fetch(url)
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
    }, [url]);

    console.log(projectInfo)


  return (
    <div className="project__info">
        <NavLink to="/projects/">
          <Back_Icon />
        </NavLink>
        <h3>{projectInfo?.name?.toUpperCase().replace(/[-_]/g, ' ')}</h3>
        <div className="cell__image_content">
          <img
            className="phone__mockup"
            src={projectInfo ? 'https://borgesmj.github.io/cloud-storage/cellphone__template.png' : null}
            alt="Phone Mockup"
          />
          <img
            className="project__image"
            src={projectInfo ? `https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/${name}.jpeg` : null}
            alt="Project Image"
          />
        </div>
        <h4>Descripción</h4>
        <p>
          {/* Tu descripción aquí */}
        </p>
        
          <div className="proyects-tags">
              {projectInfo?.topics?.map((item, index) => (
                <span key={`tag_key_${index}`}>{item.toUpperCase()}</span>
              ))}
          </div>
        
        <div className="links_section">
          {projectInfo?.html_url && <a href={projectInfo?.html_url} target='_blank'>Documentación y código</a>}
          {projectInfo?.homepage && <a href={projectInfo?.homepage} target='_blank'>Demo</a>}
        </div>
        {projectInfo?.name ? (
          <RepoComments
            comments_url={projectInfo?.issues_url}
            name={projectInfo?.name}
          />
        ) : (
          <p>Loading...</p>
        )}

</div>

  )
}

export default projectInfo
