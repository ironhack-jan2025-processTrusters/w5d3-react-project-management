import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

function ProjectListPage() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/projects`)
            .then(response => {
                const projectsArr = response.data.toReversed();
                setProjects(projectsArr);
            })
            .catch(e => console.log("Error getting projects from the API...", e));
    }, []);


    if (projects === null) {
        return <Loader />
    }


    return (
        <div className="card-list">
            {projects.map((projectDetails) => {
                return (
                    <div className="card" key={projectDetails.id}>
                        <Link to={`/projects/${projectDetails.id}`}>
                            <h3>{projectDetails.title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectListPage;