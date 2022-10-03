import { GoldPaperArrow } from "../../../assets";

const Transaction = ({ wallet, time }) => {
  return (
    <div className="mt-[19px] xl:mt-7 flex w-[335px] flex-col rounded-md border border-white border-opacity-80 bg-white py-[10px] px-6 shadow-lg hover:scale-105 dark:border-opacity-50 dark:bg-transparent dark:shadow-sky-700 sm:w-[400px] xl:w-full xl:flex-row xl:justify-between xl:py-[18px]">
      <p className="font-semibold dark:text-gray-100">{wallet}</p>
      <p className="mt-[19px] flex font-semibold opacity-50 dark:text-gray-100 dark:opacity-80 xl:mt-0">
        {time}
        <button className="pl-3">
          <GoldPaperArrow />
        </button>
      </p>
    </div>
  );
};

export default Transaction;
