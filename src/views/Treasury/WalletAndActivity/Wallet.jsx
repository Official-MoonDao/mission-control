import { MoonDAOShield, ArrowDown, ArrowUp, CopyIcon } from "../../../assets";

const Wallet = () => {
  return (
    <div className="flex w-[335px] flex-col items-center rounded-lg bg-moon-deepblue pb-6 text-white sm:w-[400px]">
      <img className="mt-4 rounded-full border border-white border-opacity-30 p-[9.53px]" src={MoonDAOShield} alt="MoonDAO logo." />
      {/*Dollars, Mooney, Wallet*/}
      <div className="mt-7 flex flex-col items-center text-center">
        <p className="text-2xl opacity-60">$29,000,340.00</p>
        <p className="mt-5 text-4xl font-bold">2,609,583,580</p>
        <p className="mt-5 flex text-sm">
          0xdDsej...BuskZ{" "}
          <button className="pl-3">
            <CopyIcon />
          </button>
        </p>
      </div>
      {/*Receive, transfer*/}
      <div className="mt-[39px]">
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
