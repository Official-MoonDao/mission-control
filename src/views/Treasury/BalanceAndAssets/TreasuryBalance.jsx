import { TreasuryLogo } from "../../../assets";

const TreasuryBalance = () => {
  return (
    <div className="flex flex-col">
      <TreasuryLogo />
      <h3 className="mt-2 font-Montserrat text-[28px] font-semibold dark:text-gray-100">Treasury Balance</h3>
      <h2 className="mt-4 font-Montserrat text-[38px] font-extrabold opacity-70 dark:text-white dark:opacity-100">$120,000,000.43</h2>
    </div>
  );
};

export default TreasuryBalance;
