import ArticleTitle from "../../components/ArticleTitle";

const Project = ({ idx, title, startDate, active, deadline, teamLeads, link, body, tags }) => {
  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } flex w-[336px] flex-col rounded-[8px] border-[0.5px]  border-white border-opacity-40 bg-white px-[20px] pt-[10px] text-white shadow-lg hover:scale-105 dark:bg-transparent dark:shadow-sky-700 sm:w-[400px] xl:w-full xl:flex-row xl:justify-between xl:dark:bg-white dark:xl:bg-opacity-[0.04]`}
    >
      {/*Title and date, team*/}
      <div className=" mt-[20px] pb-[20px] xl:mt-0">
        <ArticleTitle text={title} />
        <p className="mt-1 font-semibold text-moon-gold">Start Date: {startDate} | Deadline: {deadline}</p>

        {/*Body*/}
        <div className="mt-5 hidden lg:block">
          <p className={`text-lg leading-8 text-gray-800 dark:text-gray-100`}>
            {body.slice(0, 350)}
            <a
              className={`inline-block whitespace-pre text-xl font-semibold text-yellow-600 hover:scale-105 hover:text-yellow-500 dark:text-moon-gold dark:hover:text-amber-300`}
              href={link}
              target="_blank"
            >
              {" ...read more."}
            </a>
          </p>
        </div>

        {/*Status, Team, and Tags*/}
        <div className="mt-[32px] hidden xl:flex xl:items-center">
          <div className={`${active ? "bg-moon-blue" : "bg-red-500"}     inline-block rounded py-[8px] px-[10px] `}>
            <p className={`font-semibold uppercase `}>{active ? "ongoing" : "ended"}</p>
          </div>
          <p className="pl-[30px] font-semibold text-moon-gold ">{teamLeads && teamLeads.length > 0 ? "Team stewards" : "No team data yet"}</p>
          {teamLeads && teamLeads.length > 0 && (
            <>
              {teamLeads.map((e, i) => (
                <p
                  key={i}
                  className={`${
                    i === 0 ? "ml-[21px]" : "ml-[8px]"
                  } rounded bg-black bg-opacity-[0.09] px-[10px] py-[5px] font-semibold text-gray-600 dark:bg-white dark:bg-opacity-10 dark:text-white`}
                >
                  {e}
                </p>
              ))}
            </>
          )}
          <p className="pl-[30px] font-semibold text-moon-gold ">{tags && tags.length > 0 ? "Tags" : "No tags"}</p>
          {tags && tags.length > 0 && (
            <>
              {tags.map((e, i) => (
                <p
                  key={i}
                  className={`${
                    i === 0 ? "ml-[21px]" : "ml-[8px]"
                  } rounded bg-black bg-opacity-[0.09] px-[10px] py-[5px] font-semibold text-gray-600 dark:bg-white dark:bg-opacity-10 dark:text-white`}
                >
                  {e}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
