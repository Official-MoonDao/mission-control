import ArticleTitle from "../../components/ArticleTitle";

const Announcement = ({ title, audience, author, date, img, bottomBorder }) => {
  return (
    <article className={`w-[336px] border-t-[1px] ${bottomBorder} flex border-black border-opacity-20 py-[26px] dark:border-white`}>
      <img src={img} className="h-[86px] w-[86px] rounded-full object-cover" />

      <div className="ml-[26px] pr-[4px]">
        <div className="flex flex-col">
          <ArticleTitle text={title} />
          <p className="mt-[5px] font-semibold uppercase text-moon-orange">{audience}</p>
        </div>

        <div className="mt-[24px] flex flex-col">
          <p className="text-[22px] text-moon-gold">{author}</p>
          <p className="text-[22px] text-black opacity-60 dark:text-gray-100 dark:opacity-100 ">{date}</p>
        </div>
      </div>
    </article>
  );
};

export default Announcement;
