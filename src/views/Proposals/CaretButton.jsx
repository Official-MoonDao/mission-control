const CaretButton = ({ right, skip, setSkip, total, scrollUp }) => {
  const canGoToLeftPage = right && skip - 10 >= 0;
  const canGoToRightPage = skip + 10 <= total;

  return (
    <button
      disabled={(right && !canGoToLeftPage) || (!canGoToRightPage && !canGoToLeftPage)}
      onClick={() => {
        if ((scrollUp && canGoToRightPage) || (scrollUp && canGoToLeftPage)) setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 300);
        right && canGoToLeftPage ? setSkip(skip - 10) : canGoToRightPage && setSkip(skip + 10);
      }}
      className="border-[50%] margin-auto block h-[36px] w-[36px] rounded-full border border-emerald-600 hover:scale-105 hover:border-emerald-800 disabled:opacity-50 disabled:hover:scale-100 dark:border-moon-gold dark:hover:border-amber-400"
    >
      <svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" className={`relative ${right ? "right-[1px] rotate-180" : "left-[1px]"} bottom-[1.5px]  inline`}>
        <path className="stroke-emerald-700  dark:stroke-amber-500" d="m1.333 1 5 5-5 5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default CaretButton;
