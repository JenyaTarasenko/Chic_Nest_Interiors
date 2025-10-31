import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/projects-all/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Наши проекты</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {project.image_1 && (
                <img
                  src={project.image_1}
                  className="card-img-top"
                  alt={project.name}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p>{project.year} — {project.location}</p>
                <Link to={`/projects/${project.id}`} className="btn btn-primary">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProject;
