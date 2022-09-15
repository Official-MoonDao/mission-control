import { MoonDAOShield } from "../../assets";
import ArticleTitle from "../../components/ArticleTitle";

const Bounty = ({ title, date, img, mooney, dollars, idx }) => {
  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } flex w-[336px] flex-col items-center rounded-[15px] border-[0.5px] border-gray-300 bg-white pt-[10px] text-gray-100 shadow-lg hover:scale-105 dark:bg-transparent dark:shadow-indigo-500 sm:w-[400px] xl:w-full xl:flex-row xl:justify-between xl:py-[19px] xl:px-[20px] xl:dark:bg-white dark:xl:bg-opacity-[0.04]`}
    >
      {/*photo, title and date */}
      <div className="flex items-center xl:min-w-[500px]">
        <img src={img} className="ml-[7px] h-[86px] w-[86px] rounded-full object-cover" />
        <div className="ml-[14px] pr-[4px]">
          <ArticleTitle text={title} />
          <p className="mt-[9px] font-semibold text-moon-gold">Posted {date}</p>
        </div>
      </div>

      {/*Mooney, dollars*/}
      <div className="mt-[62px] xl:mt-3 xl:ml-8 xl:flex xl:min-w-[200px] xl:flex-col xl:items-start">
        <div className="inline xl:flex xl:flex-col xl:items-center">
          <div className="flex bg-black bg-opacity-[0.05] py-[8px] px-[10px] dark:bg-white dark:bg-opacity-20 xl:items-center">
            <img src={MoonDAOShield} alt="" className="h-[24px] w-[24px]" />
            <p className="ml-1 text-[16px] font-bold text-moon-gold xl:ml-2">{mooney} $MOONEY</p>
          </div>
          <p className="mt-[6px] mb-[10px] text-[16px] font-semibold text-black dark:text-moon-orange">${dollars}</p>
        </div>
      </div>
    </article>
  );
};

export default Bounty;
