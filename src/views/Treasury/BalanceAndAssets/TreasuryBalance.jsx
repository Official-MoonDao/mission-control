const TreasuryBalance = () => {
  return (
    <div className="flex flex-col">
      {/*Handle Logo*/}
      <h3 className="font-Montserrat font-semibold text-[28px] dark:text-gray-100">Treasury Balance</h3>
      {/*Fix the font-extrabold issue with Montserrat*/}
      <h2 className="text-[38px] mt-4 font-Montserrat opacity-70 dark:opacity-100 dark:text-white">$120,000,000.43</h2>
    </div>
  );
};

export default TreasuryBalance;
