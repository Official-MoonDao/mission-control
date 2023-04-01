import { assetImageExtension } from "../../../utilities/assetImageExtension";

const Asset = ({ name, amount, usd, address, loading }) => {
  const assetLink = address ? `https://etherscan.io/address/${address}` : "";
  const image = assetImageExtension[name] ? `/coins/${name}.${assetImageExtension[name]}` : "/coins/DEFAULT.png";

  return (
    <div
      className={`component-background mt-5 flex w-[336px] flex-col items-center rounded border-[0.5px] border-blue-400 dark:border-yellow-100 py-1 shadow-md shadow-blue-500 dark:shadow-yellow-50 sm:w-[400px] xl:mt-6 2xl:w-full 2xl:flex-row 2xl:justify-between 2xl:px-7 2xl:py-2  ${
        loading && "loading-component"
      }`}
    >
      <div className="relative mt-1 flex items-center">
        {loading ? <div className="loading-line h-8 w-8 rounded-full"></div> : <img className="h-auto w-7 2xl:w-8" src={image} alt="Asset Logo." />}
        <a
          href={assetLink}
          className={`ml-3 font-Montserrat text-lg font-semibold tracking-wide text-yellow-500 hover:scale-110 dark:text-moon-gold 2xl:ml-4 2xl:text-xl ${
            loading && "loading-line"
          }`}
        >
          {name}
        </a>
      </div>

      <div className="mt-3 text-center 2xl:mt-0 2xl:text-right">
        <p className={`text-xl font-semibold md:text-2xl ${loading ? "loading-line" : "text-blue-950 dark:text-gray-50"}`}>{amount}</p>
        <p className={`mt-2 text-slate-500 dark:text-slate-300 xl:mt-3 ${loading && "loading-line"}`}>{name === "MOONEY" ? "Governance Token" : `$${usd}`}</p>
      </div>
    </div>
  );
};

export default Asset;
