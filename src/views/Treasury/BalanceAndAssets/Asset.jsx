{
  /*Handle Logo, line Vector*/
}

const Asset = ({ mooney, dollars }) => {
  return (
    <div className="mt-[18px] flex w-[279px] flex-col items-center rounded-lg bg-white py-[15px] shadow-lg hover:scale-105 dark:bg-opacity-[0.06] dark:shadow-sky-700 sm:w-[335px]">
      <h3 className="font-bold opacity-70 dark:text-white dark:opacity-100">$MOONEY</h3>
      <p className="mt-3 text-[22px] font-bold opacity-80 dark:text-white dark:opacity-100">{mooney}</p>
      <p className="mt-2 text-sm opacity-50 dark:text-white dark:opacity-60">{dollars}</p>
    </div>
  );
};

export default Asset;
