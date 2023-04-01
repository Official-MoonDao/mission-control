const ArticleTitle = ({ text, loading, link }) => {
  return (
    <h3
      className={`font-Montserrat text-[22px] font-bold leading-10 tracking-wide text-slate-900 hover:text-black dark:text-gray-100 dark:hover:text-white lg:text-2xl 2xl:text-[26px] ${
        loading ? "loading-line" : link && "underline decoration-blue-400 dark:decoration-yellow-100 decoration-1 duration-200 hover:decoration-2"
      }`}
    >
      {!loading && link ? (
        <a target="_blank" href={link}>
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </h3>
  );
};

export default ArticleTitle;
