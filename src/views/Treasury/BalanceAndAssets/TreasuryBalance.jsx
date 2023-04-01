import { TreasuryAndMobileLogo } from "../../../assets";
import Header from "../../../components/Header";
import { Line } from "../../../components/Layout";

const TreasuryBalance = ({ balance, loading }) => {
  return (
    <div className="flex flex-col">
      <TreasuryAndMobileLogo />
      <div className="mt-2 xl:mt-0">
        <Header text={"Treasury"} />
      </div>
      <h2 className={`mt-4 truncate font-Montserrat text-4xl tracking-wider font-bold text-blue-950 dark:text-yellow-50 lg:text-5xl xl:mt-7 ${loading && "loading-line"}`}>
        ${balance}
      </h2>
      {/*Disclaimer */}
      <p className="mt-10 inline-block w-[336px] font-Montserrat text-blue-600 opacity-90 dark:text-yellow-200 sm:w-[400px] lg:w-[336px] xl:w-full">
        * The total doesn't include the value of $MOONEY.{" "}
      </p>

      <Line />
    </div>
  );
};

export default TreasuryBalance;
