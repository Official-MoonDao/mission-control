import SelectButton from "../../components/SelectButton";

const AnnoucementSelect = () => {
  return (
    <main className="">
      {/* 
      <button className="rounded bg-moon-gold py-3 px-6 text-white">Filters</button>
      */}

      {/*Date filter and person options */}
      <div className="w-[335px] rounded-lg border-[0.5px] bg-white shadow-lg dark:border-white dark:border-opacity-[0.38] dark:bg-opacity-[0.04] sm:w-[400px] xl:w-[335px]">
        <div className="flex flex-col items-center border-b-[0.5px] border-black border-opacity-20 py-[24px] dark:border-white dark:border-opacity-[0.38]">
          <select
            className="rounded border border-moon-gold px-[24px] py-[12px] font-semibold text-gray-900 dark:text-gray-100 dark:border-white dark:bg-white dark:bg-opacity-[0.04]"
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

    </main>
  );
};

export default AnnoucementSelect;
