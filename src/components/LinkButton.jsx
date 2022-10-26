const LinkButton = ({ text, link, img }) => {
  return (
    <button
      name={`Link to ${text}`}
      className="flex items-center rounded-2xl border-[0.5px] border-gray-300 bg-white bg-opacity-40 from-indigo-900 to-slate-900 px-2 py-1 font-semibold capitalize shadow hover:scale-105 dark:bg-gradient-to-br dark:text-gray-100 dark:shadow-indigo-400 lg:text-lg 2xl:text-xl"
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
