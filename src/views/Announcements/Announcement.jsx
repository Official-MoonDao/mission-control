const Announcement = ({ content, author, timestamp, reactions, loading }) => {
  const avatar = `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.webp?size=80`;
  const name = author.username;
  const time = new Date(timestamp).toDateString();

  return (
    <article
      className={`mt-8 w-[336px] rounded-[12px] border-[0.5px] border-gray-300  bg-white  bg-opacity-40 lg:bg-opacity-50 text-gray-900 shadow-md dark:bg-opacity-30 dark:shadow-indigo-400 sm:w-[400px] lg:mt-10 lg:w-full dark:bg-black  ${
        loading && "loading-component"
      }`}
    >
      <div className="px-3 sm:px-4 py-3 lg:py-4 lg:px-5 xl:px-6 xl:py-5">
        
      {/*Avatar, Name, Date */}
        <div className="flex items-center justify-between lg:justify-start">
          <div className="flex items-center">
            <img src={avatar} className="h-[60px] w-auto lg:h-[70px] rounded-full object-cover" />
            <h4 className={`ml-2 font-Montserrat text-lg font-bold text-gradient sm:ml-3 lg:ml-4 sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${loading && "loading-line"}`}>{name}</h4>
          </div>
          <p className="text-sm inline-block font-semibold text-gray-600 dark:text-moon-gold lg:ml-6 2xl:ml-7 lg:text-base">{time}</p>
        </div>
        
        {/*Content*/}
        <div className="mt-2 lg:mt-4 2xl:mt-6">
          <p className="whitespace-pre-wrap break-words text-sm font-semibold leading-relaxed dark:text-gray-100 sm:text-base lg:text-lg 2xl:text-xl">{content}</p>
        </div>

        {/*Reactions*/}
        <div className="mt-3 lg:mt-5 2xl:mt-6 flex">{reactions && reactions.map((reaction, i) => <Reaction key={i} reaction={reaction} index={i} />)}</div>

      </div>
    </article>
  );
};

const Reaction = ({ reaction, index }) => {
  return (
    <div className={`${index === 0 ? "" : "ml-3"} flex items-center rounded-2xl bg-gray-300 py-1 px-2 lg:px-3 dark:bg-slate-900`}>
      <h1>{reaction.emoji.name}</h1>
      <p className="ml-1 lg:text-base text-sm dark:text-gray-100">{reaction.count}</p>
    </div>
  );
};

export default Announcement;
