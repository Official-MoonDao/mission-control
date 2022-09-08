import { MoonDAOShield } from "../../assets";
import ArticleTitle from "../../components/ArticleTitle";

const Bounty = ({ title, date, img, mooney, dollars, idx }) => {
  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } flex w-[336px] flex-col items-center rounded-[15px] border-[0.5px] border-gray-300 bg-white pt-[10px] text-gray-100 dark:bg-transparent`}
    >
      <div className="flex items-center">
        <img src={img} className="ml-[7px] h-[86px] w-[86px] rounded-full object-cover" />

        <div className="ml-[14px] pr-[4px]">
          <ArticleTitle text={title} />
          <p className="mt-[9px] font-semibold text-moon-gold">Posted {date}</p>
        </div>
      </div>

      <div className="mt-[62px]">
        <div className="flex bg-black bg-opacity-[0.05] py-[8px] px-[10px] dark:bg-white dark:bg-opacity-20">
          <img src={MoonDAOShield} alt="" className="h-[24px] w-[24px]" />
          <p className="ml-1 text-[16px] font-bold text-moon-gold">{mooney} $MOONEY</p>
        </div>
        <p className="mt-[6px] mb-[10px] text-[16px] font-semibold text-black dark:text-moon-orange">${dollars}</p>
      </div>
    </article>
  );
};

export default Bounty;
