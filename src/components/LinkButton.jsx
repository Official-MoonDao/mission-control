const LinkButton = ({ text, link, img }) => {
  return (
    <button
      name={`Link to ${text}`}
      className="component-background flex items-center rounded-xl border-[0.5px] border-detail-light  px-2 py-1 font-mono font-semibold tracking-wide text-slate-950 shadow shadow-detail-light hover:scale-105 dark:border-detail-dark dark:text-slate-50 dark:shadow-detail-dark lg:px-4 lg:text-lg 2xl:text-xl"
    >
      <img className="h-auto w-7 xl:w-8" src={img} alt={`${text} Logo.`} />
      <a href={link} target="_blank" className="ml-1">
        {text}
      </a>
      <p className="pl-3 text-2xl text-moon-blue dark:text-moon-gold">→</p>
    </button>
  );
};

export default LinkButton;
