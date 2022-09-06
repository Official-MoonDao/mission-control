const Project = ({ idx, title, postDate, active, deadline }) => {
  return (
    <article
      className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} px-[20px] pt-[10px] flex flex-col text-white border-[0.5px] border-white border-opacity-40 rounded-[8px] w-[336px]`}
    >
      <div className=" mt-[20px]">
        <h3 className="text-[22px] font-bold">{title}</h3>
        <p className="font-semibold text-moon-gold mt-1">Posted {postDate}</p>
      </div>

      <div className="mt-[32px] pb-[20px]">
        <div className={`${active ? "bg-moon-blue" : "bg-red-500"}     py-[8px] px-[10px] rounded inline-block `}>
          <p className={`uppercase font-semibold`}>{active ? "ongoing" : "paused"}</p>
        </div>
        <p className="mt-[9px] opacity-80 text-sm">Project Deadline: {deadline}</p>
      </div>
    </article>
  );
};

export default Project;
