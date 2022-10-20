//We don't know the ID for the role "Astronaut" so we can't color code it yet.

const Announcement = ({ content, mentions, author, timestamp, reactions, loading }) => {
  const avatar = `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.webp?size=80`;
  const name = author.username;
  const time = new Date(timestamp).toDateString();

  return (
    <article
      className={`mt-8 w-[336px] rounded-[12px] border-[0.5px] border-gray-300  bg-white  bg-opacity-40 text-gray-900 shadow-md dark:bg-black dark:bg-opacity-30 dark:shadow-indigo-400 sm:w-[400px] lg:mt-10 lg:w-full lg:bg-opacity-50  ${
        loading && "loading-component"
      }`}
    >
      <div className="px-3 py-3 sm:px-4 lg:py-4 lg:px-5 xl:px-6 xl:py-5">
        {/*Avatar, Name, Date */}
        <div className="flex items-center justify-between lg:justify-start">
          <div className="flex items-center">
            <img src={avatar} className="2xl:[h-75px] h-[60px] w-auto rounded-full object-cover lg:h-[70px]" />
            <h4 className={`text-gradient ml-2 font-Montserrat text-lg font-bold sm:ml-3 sm:text-xl lg:ml-4 lg:text-2xl xl:text-3xl 2xl:text-4xl ${loading && "loading-line"}`}>
              {name}
            </h4>
          </div>
          <p className="inline-block font-semibold text-moon-gold lg:ml-6 lg:text-base 2xl:ml-8">{time}</p>
        </div>

        {/*Content*/}
        <div className="mt-2 lg:mt-4 2xl:mt-6">
          <AnnouncementContent text={content} mentions={mentions} />
        </div>

        {/*Reactions*/}
        <div className="mt-3 flex lg:mt-5 2xl:mt-6">{reactions && reactions.map((reaction, i) => <Reaction key={i} reaction={reaction} index={i} />)}</div>
      </div>
    </article>
  );
};

const Reaction = ({ reaction, index }) => {
  return (
    <div className={`${index === 0 ? "" : "ml-3"} flex items-center rounded-2xl bg-gray-300 py-1 px-2 dark:bg-slate-900 lg:px-3`}>
      <h1>{reaction.emoji.name}</h1>
      <p className="ml-1 text-sm dark:text-gray-100 lg:text-base">{reaction.count}</p>
    </div>
  );
};

const AnnouncementContent = ({ text, mentions }) => {
  const linkRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  console.log(text);
  const words = text.replaceAll("\n", " \n ").split(" ");

  return (
    <p className="whitespace-pre-wrap break-words leading-relaxed dark:text-gray-100 lg:text-lg 2xl:text-xl">
      {words.map((word, i) =>
        word.match(linkRegex) ? (
          <a key={i} className="link " href={word} target="_blank">{`${word} `}</a>
        ) : word.startsWith("<@") ? (
          <ReplaceIdWithName word={word} mentions={mentions} />
        ) : word.startsWith("@") ? (
          <span key={i} className="font-semibold text-emerald-500 dark:text-moon-gold">{`${word} `}</span>
        ) : (
          `${word} `
        )
      )}
    </p>
  );
};

const ReplaceIdWithName = ({ word, mentions }) => {
  const roleDictionary = {
    "914997939905101874": "Rocketeers",
    "915011037017817149": "Moon Settlers",
  };

  const ending = word.lastIndexOf(">");
  const id = word.slice(2, ending);
  const roleId = word.slice(3, ending);

  return (
    <>
      {mentions.map(
        (mention) =>
          mention.id.includes(id) && (
            <>
              <span key={mention.id} className="font-semibold text-blue-500 dark:text-amber-400">{`@${mention.username}`}</span>
              {word.slice(ending + 1) + " "}
            </>
          )
      )}

      {roleDictionary[roleId] && (
        <>
          <span key={roleId} className={`${roleDictionary[roleId] === "Rocketeers" ? "text-emerald-400" : "text-purple-500"}`}>
            {`@${roleDictionary[roleId]}`}
          </span>
          {word.slice(ending + 1) + " "}
        </>
      )}
    </>
  );
};

export default Announcement;
