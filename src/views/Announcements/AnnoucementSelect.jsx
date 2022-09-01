const AnnoucementSelect = () => {
  return (
    <main className="flex flex-col items-center mt-[72px] w-[335px] min-h-[600px] bg-white bg-opacity-[0.04] border-[0.5px] border-white border-opacity-[0.38] rounded-lg">
      {/*Filters */}
      <div className="flex flex-col items-center py-[25px] px-[50px]">
        <select name="date" id="date">
          <option value="all">All announcements</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>

        <button className="">Categories</button>
      </div>

      {/*People filter*/}
      <div></div>
    </main>
  );
};

export default AnnoucementSelect;
