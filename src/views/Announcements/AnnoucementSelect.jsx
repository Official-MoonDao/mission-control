import SelectButton from "../../components/SelectButton";
import { useState } from "react";

const AnnoucementSelect = () => {
  const [filterOptions, setFilterOptions] = useState(false);
  return (
    <>
      <div className="w-[335px] sm:w-[400px] xl:hidden">
        <button
          onClick={() => setFilterOptions(!filterOptions)}
          className="rounded border bg-gradient-to-br from-amber-500 to-yellow-200 py-3 px-6 font-semibold text-gray-100 hover:scale-105 hover:text-white dark:from-slate-800 dark:to-gray-900"
        >
          Filters
        </button>
      </div>

      {/*Date filter and person options */}
      <div
        className={`${
          filterOptions ? "block" : "hidden"
        } w-[335px] rounded-lg border-[0.5px] bg-white shadow-lg dark:border-white dark:border-opacity-[0.38] dark:bg-opacity-[0.04] sm:w-[400px] xl:block xl:w-[335px] xl:bg-opacity-60`}
      >
        <div className="flex flex-col items-center border-b-[0.5px] border-black border-opacity-20 py-[24px] dark:border-white dark:border-opacity-[0.38]">
          <select
            className="rounded border border-moon-gold px-[24px] py-[12px] font-semibold text-gray-900 dark:border-white dark:bg-white dark:bg-opacity-[0.04] dark:text-moon-gold"
            name="date"
            id="date"
          >
            <option value="all">All Announcements</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        <div className="flex flex-col items-start pt-[31px] pb-[27px]">
          {["Everyone", "Rocketeers", "Moon Settlers", "$Moon Millionaire", "$Moon Shark", "$Moon Hodler", "Earthlings"].map((e, i) => (
            <SelectButton key={i} text={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AnnoucementSelect;
