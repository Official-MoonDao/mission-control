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
      <h2
        className={`mt-4 truncate font-Montserrat text-4xl font-bold tracking-wider 2xl:tracking-widest text-title-light dark:text-dark-highlight lg:text-5xl xl:mt-7 ${
          loading && "loading-line"
        }`}
      >
        ${balance}
      </h2>
      {/*Disclaimer */}
      <p className="mt-10 inline-block w-[336px] font-mono tracking-wider text-stronger-light opacity-90 dark:text-detail-dark sm:w-[400px] lg:w-[336px] xl:w-full">
        ● The total doesn't include the value of $MOONEY.{" "}
      </p>

      <Line />
    </div>
  );
};

export default TreasuryBalance;
