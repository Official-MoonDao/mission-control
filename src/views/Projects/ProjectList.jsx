import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../api/projectsGQL";
import { errorToast } from "../../utilities/errorToast";
import Project from "./Project";

export default function ProjectList() {
  const { data, loading, error } = useQuery(PROJECTS_QUERY);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (!loading && error) errorToast(error);
    if (!loading && data)
      setProjects(
        data.proposals.filter((p) => p.scores[0] >= p.scores_total * 0.8)
      );
  }, [data, loading, projects]);
  return (
    <>
      {projects &&
        projects.map((p) => (
          <Project
            key={`project-${p.id}`}
            title={p.title}
            startDate={new Date(p.end * 1000).toDateString()}
            link={p.link}
            body={p.body}
            teamLeads={p.team}
            tags={p.tags}
          />
        ))}
    </>
  );
}
