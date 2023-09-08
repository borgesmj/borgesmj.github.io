import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

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

console.log(project__data)
  return (
    <div>
      <NavLink to="/Projects/">back</NavLink>
    </div>
  )
}

export default ProjectInfo
