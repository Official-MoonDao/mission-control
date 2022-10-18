import SearchBar from "../../components/SearchBar";
import { projectsData } from "../../projects-data/projects";
import Project from "./Project";
import Header from "../../components/Header";
import { SectionLayout, Line } from "../../components/Layout";

const OngoingProjects = () => {
  return (
    <SectionLayout>
      <Header text={"Ongoing Projects"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <Line />
      <p className="mt-[24px] font-semibold text-black text-opacity-40 dark:text-gray-100 dark:opacity-100">{projectsData.length} Projects</p>

      {projectsData.map((e, i) => (
        <Project
         key={i}
         active={e.active} 
         idx={i} 
         title={e.title} 
         deadline={e.deadline} 
         startDate={e.startDate} 
         teamLeads={e.teamLeads}
         link={e.link}
         body={e.body}
         tags={e.tags} />
      ))}
    </SectionLayout>
  );
};

export default OngoingProjects;
