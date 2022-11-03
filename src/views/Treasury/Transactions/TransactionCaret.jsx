const TransactionCaret = ({ left, page, setPage, pageMax, isLoaded }) => {
  return (
    <button
      disabled={(left && page === 1) || page === pageMax || !isLoaded}
      onClick={() => {
        left && page !== 1 ? setPage(page - 1) : page !== pageMax && setPage(page + 1);
      }}
      className="border-[50%] margin-auto block h-[36px] w-[36px] rounded-full border border-emerald-600 hover:scale-105 hover:border-emerald-800 disabled:opacity-50 disabled:hover:scale-100 dark:border-moon-gold dark:hover:border-amber-400"
    >
      <svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" className={`relative ${left ? "right-[1px] rotate-180" : "left-[1px]"} bottom-[1.5px]  inline`}>
        <path className="stroke-emerald-700  dark:stroke-amber-500" d="m1.333 1 5 5-5 5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default TransactionCaret;
