import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




function DetailList(){
    const {pk} = useParams();
    const [project, setProject]= useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8001/api/projects/${pk}/`)
        .then(res => res.json())
        .then(data => setProject(data));
    }, [pk])

    if (error) return <div>{error}</div>
    if (!project) return <div>Загрузка</div>

    return(
        
        <>
            <div className="container mt-4">
                <h2 className="mb-4">{project.name}</h2>
                <h3 className="mb-4">{project.description}</h3>
                <img src={project.image_1} />
                <img src={project.image_2} />
                
            </div>
        </>

    );
}
export default DetailList;