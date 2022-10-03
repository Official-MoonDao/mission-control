import { TreasuryLogo } from "../../../assets";

const TreasuryBalance = () => {
  return (
    <div className="flex flex-col">
      <div className="xl:flex xl:items-center">
      <TreasuryLogo />
      <h3 className="mt-2 xl:ml-2 xl:mt-0 font-Montserrat text-[28px] font-semibold dark:text-gray-100">Treasury Balance</h3>
      </div>
      <h2 className="mt-4 font-Montserrat text-[38px] xl:text-5xl 2xl:text-6xl font-extrabold opacity-70 dark:text-white dark:opacity-100 truncate">$120,000,000.43</h2>
    </div>
  );
};

export default TreasuryBalance;
