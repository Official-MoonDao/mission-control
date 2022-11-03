const TransactionPagination = ({ currentPage, pageNumber, setPage, isLoaded }) => {
  const samePage = currentPage === pageNumber;
  return (
    <button
      disabled={samePage || !isLoaded}
      name={`Go to page ${pageNumber}`}
      className={` h-[40px] w-[40px] text-center text-xl font-semibold hover:scale-105 ${
        samePage ? "scale-125 bg-emerald-500 text-white dark:bg-slate-900 dark:text-white"
        : "bg-emerald-700 bg-opacity-50 text-gray-300 dark:bg-slate-800 dark:text-gray-300"
      }`}
      onClick={() => {
        setPage(pageNumber);
      }}
    >
      {pageNumber}
    </button>
  );
};

export default TransactionPagination;
