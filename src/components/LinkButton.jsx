const LinkButton = ({ text, link, img }) => {
  return (
    <button
      name={`Link to ${text}`}
      className="flex items-center rounded-xl border-[0.5px] border-gray-300 dark:border-gray-100 bg-gradient-to-br from-zinc-100 to-gray-200 px-2 py-1 lg:px-3 shadow-sm font-mono font-semibold hover:scale-105 dark:from-slate-950 dark:to-gray-950 dark:text-gray-100 shadow-blue-400 dark:shadow-indigo-100 lg:text-lg 2xl:text-xl"
    >
      <img className="h-auto w-7 xl:w-8" src={img} alt={`${text} Logo.`} />
      <a href={link} target="_blank" className="ml-1">
        {text}
      </a>
      <p className="text-gradient px-1 text-xl">→</p>
    </button>
  );
};

export default LinkButton;
