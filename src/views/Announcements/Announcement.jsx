import ArticleTitle from "../../components/ArticleTitle";

const Announcement = ({ title, audience, author, date, img, bottomBorder }) => {
  return (
    <article className={`w-[336px] border-t-[1px] sm:w-[400px] xl:w-full  ${bottomBorder} flex border-black border-opacity-20 py-[26px] dark:border-white`}>
      <img src={img} className="h-[86px] w-[86px] rounded-full object-cover" />
      <div className="ml-[26px] w-full pr-[4px] xl:flex xl:items-center xl:justify-between">
        {/*title, audience */}
        <div className="flex flex-col ">
          <ArticleTitle text={title} />
          <p className="mt-[5px] font-semibold uppercase text-moon-orange">{audience}</p>
        </div>

        {/*Author, date */}
        <div className="mt-[24px] flex flex-col xl:mt-0">
          <p className="text-[22px] text-amber-50 xl:text-moon-gold">{author}</p>
          <p className="text-[22px] text-black opacity-60 dark:text-gray-100 dark:opacity-100 ">{date}</p>
        </div>
      </div>
    </article>
  );
};

export default Announcement;
