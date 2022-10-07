import SearchBar from "../../components/SearchBar";
import { projectTests } from "../../test-data/tests";
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
      <p className="mt-[24px] font-semibold text-black text-opacity-40 dark:text-gray-100 dark:opacity-100">{projectTests.length} Projects</p>

      {projectTests.map((e, i) => (
        <Project key={i} active={e.active} idx={i} title={e.title} deadline={e.deadline} postDate={e.postDate} team={e.team} />
      ))}
    </SectionLayout>
  );
};

export default OngoingProjects;
