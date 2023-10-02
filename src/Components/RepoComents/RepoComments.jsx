import React, { useEffect, useState } from "react";
import "./RepoComments.css";

const RepoComments = ({ comments_url, name }) => {
  const [comments, setComments] = useState([]);
  const [issuesUrl, setIssuesUrl] = useState("");

  useEffect(() => {
    setIssuesUrl(`https://api.github.com/repos/borgesmj/${name}/issues`);
  }, [name]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const allIssues = [];
        let page = 1;
        while (true) {
          const response = await fetch(`${issuesUrl}?page=${page}`);
          if (!response.ok) {
            break;
          }
          const json = await response.json();
          if (json.length === 0) {
            break;
          }
          allIssues.push(...json);
          page++;
        }
        setComments(allIssues);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, [issuesUrl]);

  return (
    <div className="comments__section">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>
          Aún no hay comentarios, sé el primero en comentar en el enlace abajo
        </p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <img src={comment.user.avatar_url} alt="" />
              <div>
                <h4>{comment.title}</h4>
                <p>{comment.body}</p>
                <span>
                  by:{" "}
                  <a href={comment.user.html_url} target="blank">
                    {comment.user.login}
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <a
        href={`https://github.com/borgesmj/${name}/issues/new`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Comentar
      </a>
    </div>
  );
};

export default RepoComments;
