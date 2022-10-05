const ArticleTitle = ({ text, loading, link }) => {
  return (
    <h4
      className={`text-[22px] font-bold leading-10 text-black opacity-70 hover:opacity-100 dark:text-gray-200 dark:opacity-100 dark:hover:text-white ${
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
