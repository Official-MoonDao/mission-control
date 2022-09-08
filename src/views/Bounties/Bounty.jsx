import { MoonDAOShield } from "../../assets";
import ArticleTitle from "../../components/ArticleTitle";

const Bounty = ({ title, date, img, mooney, dollars, idx }) => {
  return (
    <article className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} pt-[10px] dark:bg-transparent bg-white flex flex-col items-center text-gray-100 border-[0.5px] border-gray-300 rounded-[15px] w-[336px]`}>
      <div className="flex items-center">
        <img src={img} className="h-[86px] w-[86px] object-cover rounded-full ml-[7px]" />

        <div className="ml-[14px] pr-[4px]">
          <ArticleTitle text={title} />
          <p className="mt-[9px] text-moon-gold font-semibold">Posted {date}</p>
        </div>
      </div>

      <div className="mt-[62px]">
        <div className="flex py-[8px] px-[10px] bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-[0.05]">
          <img src={MoonDAOShield} alt="" className="h-[24px] w-[24px]" />
          <p className="ml-1 text-[16px] text-moon-gold font-bold">{mooney} $MOONEY</p>
        </div>
        <p className="text-[16px] font-semibold mt-[6px] mb-[10px] text-black dark:text-moon-orange">${dollars}</p>
      </div>
    </article>
  );
};

export default Bounty;
