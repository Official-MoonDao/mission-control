import ArticleTitle from "../../components/ArticleTitle";

const Project = ({ idx, title, postDate, active, deadline }) => {
  return (
    <article
      className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} flex w-[336px] flex-col rounded-[8px] border-[0.5px] dark:bg-transparent bg-white border-white border-opacity-40 px-[20px] pt-[10px] text-white`}
    >
      <div className=" mt-[20px]">
        <ArticleTitle text={title} />
        <p className="mt-1 font-semibold text-moon-gold">Posted {postDate}</p>
      </div>

      <div className="mt-[32px] pb-[20px]">
        <div className={`${active ? "bg-moon-blue" : "bg-red-500"}     inline-block rounded py-[8px] px-[10px] `}>
          <p className={`font-semibold uppercase `}>{active ? "ongoing" : "paused"}</p>
        </div>
        <p className="mt-[9px] text-sm dark:opacity-80 opacity-40 text-black dark:text-white">Project Deadline: {deadline}</p>
      </div>
    </article>
  );
};

export default Project;
