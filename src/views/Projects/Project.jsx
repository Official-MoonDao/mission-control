import ArticleTitle from "../../components/ArticleTitle";

const Project = ({ title, startDate, active, deadline, teamLeads, link, body, tags }) => {
  return (
    <article
      className={`relative mt-10 flex w-[336px] flex-col rounded-2xl border border-gray-300  font-mono text-white hover:scale-105 dark:bg-transparent sm:w-[400px] lg:w-full lg:flex-row lg:justify-between`}
    >
      <div className="blur-background rounded-2xl"></div>

      <div className="component-background rounded-2xl px-5 pt-6 pb-3 lg:px-8 xl:px-9">
        {/*Title and date*/}
        <div className="pb-[20px]">
          <ArticleTitle text={title} link={link} />
          <Status active={active} mobile />
          <p className="mt-3 font-semibold text-moon-gold 2xl:mt-4">
            Start Date: {startDate} | Deadline: {deadline}
          </p>

          {/*Body*/}
          <div className="mt-5 hidden lg:block 2xl:mt-6">
            <p className={`text-lg leading-8 text-gray-800 dark:text-gray-100 2xl:text-xl 2xl:leading-9`}>
              {body.slice(0, 350)}
              <a className="link text-xl 2xl:text-2xl" href={link} target="_blank">
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
      </div>
    </article>
  );
};

const Status = ({ active, mobile }) => {
  return (
    <div className={`${active ? "bg-amber-500" : "bg-purple-800"} ${mobile && "my-4 lg:hidden"}  inline-block rounded py-[8px] px-[10px] `}>
      <p className={`font-semibold uppercase`}>{active ? "ongoing" : "ended"}</p>
    </div>
  );
};

const Stamp = ({ name, i, teamMember }) => (
  <p
    className={`${i === 0 ? "ml-[21px]" : "ml-[8px]"} ${
      teamMember ? "bg-emerald-600 dark:bg-indigo-600" : "bg-gray-300 text-gray-600 dark:bg-slate-700 dark:text-white"
    }  rounded  px-[10px] py-[5px] font-semibold`}
  >
    {name}
  </p>
);

export default Project;
