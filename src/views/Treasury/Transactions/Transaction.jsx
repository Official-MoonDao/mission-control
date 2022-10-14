import { ArrowDown, ArrowUp, GoldPaperArrow } from "../../../assets";
import { getHumanTime } from "../../../hooks&utils/getHumanTime";

const MULTISIG_ADDRESS = "0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9";

const Transaction = ({ data }) => {
  const transactionLink = `https://etherscan.io/tx/${data.hash}`;
  const timeStr = getHumanTime((Math.floor(Date.now() / 1000) - data.timeStamp) * 1000);
  const token = data.value / 10 ** data.tokenDecimal;
  const sent = data.from == MULTISIG_ADDRESS.toLocaleLowerCase();

  return (
    <div className="mt-5 flex w-[336px] hover:scale-105 flex-col items-center xl:w-full xl:flex-row xl:px-7 xl:py-3 xl:justify-between rounded-[15px] border-[0.5px] border-gray-300 bg-white bg-opacity-20 py-2 shadow-md dark:bg-transparent dark:shadow-indigo-400 sm:w-[400px] lg:w-[336px] dark:lg:bg-black dark:lg:bg-opacity-[0.15]">
      
   
      <div className="flex items-center relative right-3">
        <span>{sent ? <ArrowUp /> : <ArrowDown />}</span>
        <p className="ml-3 text-xl text text-amber-600 dark:text-moon-gold font-semibold font-Montserrat">{sent ? "Sent" : "Received"}</p>
      </div>

      <p className="mt-2 xl:mt-0 block bg-gradient-to-r from-slate-900  to-stone-900 bg-clip-text text-lg 2xl:text-xl font-bold text-transparent opacity-80 dark:from-purple-100 dark:to-indigo-100 dark:opacity-100">
        {token
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        {" " + data.tokenSymbol}
      </p>

      <div className="mt-2 xl:mt-0 flex items-center">
        <p className="font-semibold opacity-80 dark:text-gray-100 dark:opacity-70">{timeStr}</p>
        <a className="ml-3 block" href={transactionLink} target="_blank">
          <GoldPaperArrow />
        </a>
      </div>
    </div>
  );
};

export default Transaction;
