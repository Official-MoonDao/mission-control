import { MoonDAOShield, ArrowSide } from "../../../assets";

const Asset = ({ mooney, dollars }) => {
  return (
    <div className="mt-[18px] flex w-[279px] flex-col items-center rounded-lg border-[0.5px] border-white border-opacity-40 bg-white py-[15px] shadow-lg hover:scale-105 dark:bg-transparent dark:bg-opacity-[0.06] dark:shadow-sky-700 sm:w-[335px] 2xl:w-full 2xl:flex-row 2xl:justify-between 2xl:pl-6 2xl:pr-10">
      <div className="flex items-center">
        <img className="h-auto w-[47.67px] rounded-full border border-white border-opacity-30 p-[1.67px]" src={MoonDAOShield} alt="MoonDAO logo." />
        <h3 className="ml-2 font-bold opacity-70 dark:text-white dark:opacity-100">$MOONEY</h3>
      </div>

      <div className="mt-3 flex items-center 2xl:mt-0">
        <div className="text-right">
          <p className="text-[22px] font-bold opacity-80 dark:text-white dark:opacity-100">{mooney}</p>
          <p className="mt-2 text-sm opacity-50 dark:text-white dark:opacity-60">{dollars}</p>
        </div>
        <button className="relative left-5 mt-2">
          <ArrowSide />
        </button>
      </div>
    </div>
  );
};

export default Asset;
