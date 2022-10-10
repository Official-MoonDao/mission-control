const ArticleTitle = ({ text, loading, link }) => {
  return (
    <h4
      className={`font-Montserrat text-[22px] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white  lg:text-2xl ${
        loading ? "loading-line" : link && "underline decoration-moon-gold decoration-1 duration-200 hover:decoration-2"
      }`}
    >
      {!loading && link ? (
        <a target="_blank" href={link}>
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </h4>
  );
};

export default ArticleTitle;
