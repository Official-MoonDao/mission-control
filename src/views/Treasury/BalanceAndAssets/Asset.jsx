const Asset = ({ name, amount, usd }) => {
  return (
    <div className="mt-5 flex xl:mt-6 w-[336px] flex-col xl:flex-row items-center xl:justify-between xl:px-7 py-1 xl:py-2 rounded-[15px] border-[0.5px] border-gray-300 bg-white bg-opacity-20 shadow-md dark:bg-transparent dark:shadow-indigo-400 sm:w-[400px] lg:w-[336px] xl:w-full dark:lg:bg-black dark:lg:bg-opacity-[0.15]">
      
      <div>
      <h3 className="font-Montserrat text-lg xl:text-xl font-semibold text-amber-600 dark:text-moon-gold">${name}</h3>
      </div>

      <div className="mt-3 text-center xl:mt-0">
        <p className="bg-gradient-to-r from-slate-900  to-stone-900 bg-clip-text text-[24px] font-bold text-transparent opacity-80 dark:from-purple-100 dark:to-indigo-100 dark:opacity-100">
          {amount}
        </p>
        <p className="mt-2 xl:mt-3 opacity-70 dark:text-white dark:opacity-80">${usd}</p>
      </div>


    </div>
  );
};

export default Asset;
