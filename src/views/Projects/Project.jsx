import ArticleTitle from "../../components/ArticleTitle";

const Project = ({ idx, title, startDate, active, deadline, teamLeads, link, body, tags }) => {
  return (
    <article
      className={`${
        idx === 0 ? "mt-9" : "mt-8"
      } flex w-[336px] flex-col rounded-[8px] border-[0.5px]  border-gray-300 bg-white bg-opacity-40 px-[20px] text-white shadow-md hover:scale-105 dark:bg-transparent dark:shadow-indigo-400 sm:w-[400px] lg:w-full lg:flex-row lg:justify-between dark:lg:bg-black dark:lg:bg-opacity-30`}
    >
      {/*Title and date*/}
      <div className=" mt-[20px] pb-[20px]">
        <ArticleTitle text={title} link={link} />
        <Status active={active} mobile />
        <p className="mt-3 2xl:mt-4 font-semibold text-moon-gold">
          Start Date: {startDate} | Deadline: {deadline}
        </p>

        {/*Body*/}
        <div className="mt-5 2xl:mt-6 hidden lg:block">
          <p className={`text-lg 2xl:text-xl 2xl:leading-9 leading-8 text-gray-800 dark:text-gray-100`}>
            {body.slice(0, 350)}
            <a
              className="link text-xl 2xl:text-2xl"
              href={link}
              target="_blank"
            >
              {" ...read more."}
            </a>
          </p>
        </div>

        {/*Status, Team, and Tags*/}
        <div className="mt-[32px] hidden lg:flex lg:items-center">
          <Status active={active} />
          <p className="pl-[30px] font-semibold text-moon-gold ">{teamLeads && teamLeads.length > 0 ? "Team stewards" : "No team data yet"}</p>

          {teamLeads && teamLeads.length > 0 && teamLeads.map((e, i) => <Stamp key={i} teamMember name={e} />)}

          <p className="pl-[30px] font-semibold text-moon-gold ">{tags && tags.length > 0 ? "Tags" : "No tags"}</p>
          {tags && tags.length > 0 && tags.map((e, i) => <Stamp i={i} key={i} name={e} />)}
        </div>
      </div>
    </article>
  );
};

const Status = ({ active, mobile }) => {
  return (
    <div className={`${active ? "bg-moon-gold" : "bg-stone-800 dark:bg-slate-900"} ${mobile && "my-4 lg:hidden"}  inline-block rounded py-[8px] px-[10px] `}>
      <p className={`font-semibold uppercase`}>{active ? "ongoing" : "ended"}</p>
    </div>
  );
};

const Stamp = ({ name, i, teamMember }) => (
  <p
    className={`${i === 0 ? "ml-[21px]" : "ml-[8px]"} ${
      teamMember ? "bg-emerald-600 dark:bg-indigo-600" : "bg-gray-300 text-gray-600 dark:bg-slate-900 dark:text-white"
    }  rounded  px-[10px] py-[5px] font-semibold`}
  >
    {name}
  </p>
);

export default Project;
