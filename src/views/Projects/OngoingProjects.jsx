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

      <div className="mt-[34px] h-[1px] w-[335px] bg-black opacity-20 dark:bg-white sm:w-[400px] xl:w-full"></div>

      <p className="mt-[24px] dark:text-gray-100 dark:opacity-100 text-black text-opacity-40 font-semibold">{projectTests.length} Projects</p>

      {projectTests.map((e, i) => (
        <Project key={i} active={e.active} idx={i} title={e.title} deadline={e.deadline} postDate={e.postDate} team={e.team} />
      ))}
    </section>
  );
};

export default OngoingProjects;
