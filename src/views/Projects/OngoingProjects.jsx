import SearchBar from "../../components/SearchBar";
import { projectTests } from "../../test-data/tests";
import Project from "./Project";

const OngoingProjects = () => {
  return (
    <section className="flex flex-col mt-[31px]">
      <h3 className="text-left font-Montserrat text-[28px] text-white">Ongoing Projects</h3>
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="w-[335px] mt-[34px] bg-white opacity-20 h-[1px]"></div>

      <p className="mt-[24px] text-gray-100 font-semibold">{projectTests.length} Projects</p>

      {projectTests.map((e, i) => (
        <Project key={i} active={e.active} idx={i} title={e.title} deadline={e.deadline} postDate={e.postDate} />
      ))}
    </section>
  );
};

export default OngoingProjects;
