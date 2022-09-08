import SearchBar from "../../components/SearchBar";
import { projectTests } from "../../test-data/tests";
import Project from "./Project";
import Header from "../../components/Header";

const OngoingProjects = () => {
  return (
    <section className="flex flex-col mt-[31px]">
      <Header text={"Ongoing Projects"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="w-[335px] mt-[34px] dark:bg-white dark:opacity-20 bg-black opacity-10 h-[1px]"></div>

      <p className="mt-[24px] dark:text-gray-100 dark:opacity-100 text-black text-opacity-40 font-semibold">{projectTests.length} Projects</p>

      {projectTests.map((e, i) => (
        <Project key={i} active={e.active} idx={i} title={e.title} deadline={e.deadline} postDate={e.postDate} />
      ))}
    </section>
  );
};

export default OngoingProjects;
