import { MoonDAOShield, ArrowDown, ArrowUp, CopyIcon } from "../../../assets";

const Wallet = () => {
  return (
    <div className="flex w-[335px] flex-col items-center rounded-lg xl:rounded-b-none bg-moon-deepblue pb-6 text-white sm:w-[400px] xl:w-[660px] 2xl:w-[800px] xl:flex-row xl:px-9 2xl:justify-between">
      {/*Dollars, Mooney, Wallet*/}
      <div className="flex flex-col items-center xl:flex-row">
      <img className="mt-4 rounded-full border border-white border-opacity-30 p-[9.53px] xl:block" src={MoonDAOShield} alt="MoonDAO logo." />
      <div className="mt-7 flex flex-col items-center text-center xl:items-start xl:ml-8">
        <p className="text-2xl opacity-60">$29,000,340.00</p>
        <p className="mt-5 text-4xl font-bold truncate">2,609,583,580</p>
        <p className="mt-5 flex text-sm">
          0xdDsej...BuskZ{" "}
          <button className="pl-3">
            <CopyIcon />
          </button>
        </p>
      </div>
      </div>
      {/*Receive, transfer*/}
      <div className="mt-[39px] xl:ml-8">
        <TransactionButton text="Receive" arrowDown />
        <TransactionButton text="Transfer" />
      </div>
    </div>
  );
};

const TransactionButton = ({ text, arrowDown }) => {
  return (
    <button className={`${!arrowDown && "mt-4"} flex w-[140px] justify-center bg-white bg-opacity-[0.08] py-3 font-semibold hover:scale-105`}>
      {arrowDown ? <ArrowDown /> : <ArrowUp />}
      <p className="ml-[15px]">{text}</p>
    </button>
  );
};
export default Wallet;
