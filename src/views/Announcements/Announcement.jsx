const Announcement = ({ title, audience, author, date, img }) => {
  return (
    <article className="flex py-[26px] border-t-[1px] border-b-[1px] border-white border-opacity-20 w-[336px]">
      <img src={img} className="h-[86px] w-[86px] object-cover rounded-full" />

      <div className="ml-[26px] pr-[4px]">
        <div className="flex flex-col">
          <h4 className="text-[22px] text-white font-bold leading-10">{title}</h4>
          <p className="uppercase mt-[5px] text-moon-orange font-semibold">{audience}</p>
        </div>

        <div className="mt-[24px] flex flex-col">
          <p className="text-[22px] text-moon-gold">{author}</p>
          <p className="text-[22px] text-white">{date}</p>
        </div>
      </div>
    </article>
  );
};

export default Announcement;
