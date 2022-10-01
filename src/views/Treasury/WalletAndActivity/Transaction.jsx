const Transaction = ({ wallet, time }) => {
  return (
    <div className="flex flex-col bg-white hover:scale-105 dark:bg-transparent dark:shadow-sky-700 shadow-lg rounded-md border-white border-opacity-80 dark:border-opacity-50 border w-[335px] sm:w-[400px] py-[10px] px-6 mt-[19px]">
      <p className="font-semibold dark:text-gray-100">{wallet}</p>
      <p className="font-semibold opacity-50 dark:opacity-80 mt-[19px] dark:text-gray-100">{time}</p>
    </div>
  );
};

export default Transaction;
