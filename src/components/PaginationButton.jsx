const PaginationButton = ({ page, skip, setSkip, scrollUp }) => {
  const samePageClick = page * 10 === skip;
  return (
    <button
      disabled={samePageClick}
      className={` h-[36px] w-[36px] rounded-full text-center text-2xl font-semibold hover:scale-105 ${
        skip === page * 10
          ? "scale-125 bg-emerald-500 text-white dark:bg-indigo-50 dark:text-pink-600"
          : "bg-emerald-700 bg-opacity-50 text-zinc-700 dark:bg-gray-300 dark:text-rose-700"
      }`}
      onClick={() => {
        setSkip(10 * page);
        if (scrollUp) setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 300);
      }}
    >
      {page + 1}
    </button>
  );
};

export default PaginationButton;
