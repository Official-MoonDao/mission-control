import OngoingProjects from "./OngoingProjects";


const Projects = () => {
  return (
    <div className="mt-[65px] pb-[150px] flex flex-col items-center">
      <div className="dark:bg-opacity-[0.04] xl:mx-12 xl:max-w-[1500px] xl:rounded-lg xl:bg-white xl:bg-opacity-60 xl:px-8 xl:pb-12 xl:shadow-lg">
        <OngoingProjects/>
      </div>
    </div>
  );
};

export default Projects;
