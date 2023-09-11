import React, { useEffect, useState } from 'react'

const RepoComments = ({comments_url, name}) => {

    const [comments, setComments] = useState([])

    

    useEffect(() => {
        const fetchAPI = () => {
          fetch(comments_url)
            .then((res) => res.json())
            .then((json) => {
              setComments(json);
            })
            .catch((error) => {
              console.log(error);
            });
        };
    
        fetchAPI();
      }, []);
  return (
    <div className="comments__section">
        <h3>Comments</h3>
        {comments.length === 0 ? <p>Aun no hay comentarios, se el primero en comentar</p> : ''}
        <a href={`https://github.com/borgesmj/${name}/issues/`} target='_blank'>Comentar</a>
    </div>
  )
}

export default RepoComments
