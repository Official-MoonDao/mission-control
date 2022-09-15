import ArticleTitle from "../../components/ArticleTitle";

const Project = ({ idx, title, postDate, active, deadline, team }) => {
  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } flex w-[336px] flex-col rounded-[8px] border-[0.5px]  border-white border-opacity-40 bg-white px-[20px] pt-[10px] text-white shadow-lg hover:scale-105 dark:bg-transparent dark:shadow-indigo-500 sm:w-[400px] xl:w-full xl:flex-row xl:justify-between xl:dark:bg-white dark:xl:bg-opacity-[0.04]`}
    >
      {/*Title and date, team*/}
      <div className=" mt-[20px] pb-[20px] xl:mt-0">
        <ArticleTitle text={title} />
        <p className="mt-1 font-semibold text-moon-gold">Posted {postDate}</p>

        <div className="mt-[32px] hidden xl:flex xl:items-center">
          <p className="font-semibold text-black opacity-30 dark:text-white dark:opacity-40">{team && team.length > 0 ? "Team stewards" : "No team data yet"}</p>
          {team && team.length > 0 && (
            <>
              {team.map((e, i) => (
                <p
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

      {/*Status and deadline */}
      <div className="mt-[24px] pb-[20px] xl:mt-[48px] xl:pb-[35px] xl:text-right">
        <div className={`${active ? "bg-moon-blue" : "bg-red-500"}     inline-block rounded py-[8px] px-[10px] `}>
          <p className={`font-semibold uppercase `}>{active ? "ongoing" : "paused"}</p>
        </div>
        <p className="mt-[9px] text-sm text-black opacity-40 dark:text-white dark:opacity-80">Project Deadline: {deadline}</p>
      </div>
    </article>
  );
};

export default Project;
