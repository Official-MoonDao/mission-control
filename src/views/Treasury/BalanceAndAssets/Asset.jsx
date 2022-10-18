import { CoinDictionary } from "../../../hooks&utils/CoinDictionary";

const Asset = ({ name, amount, usd, loading }) => {

  const image = CoinDictionary[name] ? `/coins/${name}.${CoinDictionary[name]}` : "/coins/DEFAULT.png"

  return (
    <div className={`mt-5 flex xl:mt-6 w-[336px] flex-col xl:flex-row items-center xl:justify-between xl:px-7 py-1 xl:py-2 rounded-xl lg:rounded-sm border-[0.5px] border-gray-300 bg-white bg-opacity-20 shadow-md dark:bg-transparent dark:shadow-indigo-400 sm:w-[400px] lg:w-[336px] xl:w-full dark:lg:bg-black dark:lg:bg-opacity-30 ${loading && "loading-component"}`}>
      
      <div className="mt-1 flex items-center">
        {loading? <div className="rounded-full loading-line w-8 h-8"></div> : <img className="w-7 xl:w-8 h-auto" src={image} alt="Asset Logo."/>}
      <h3 className={`ml-3 xl:ml-4 font-Montserrat text-lg xl:text-xl font-semibold text-amber-600 dark:text-moon-gold ${loading && "loading-line"}`}>${name}</h3>
      </div>

      <div className="mt-3 text-center xl:mt-0">
        <p className={`text-[24px] font-bold text-transparent opacity-80 dark:from-purple-100 dark:to-indigo-100 dark:opacity-100 ${loading ? "loading-line" : "bg-clip-text bg-gradient-to-r from-slate-900  to-stone-900"}`}>
          {amount}
        </p>
        <p className={`mt-2 xl:mt-3 opacity-70 dark:text-white dark:opacity-80 ${loading && "loading-line"}`}>${usd}</p>
      </div>


    </div>
  );
};

export default Asset;
