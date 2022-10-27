import Reaction from "./Reaction";
import AnnouncementContent from "./AnnouncementContent";

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
            {loading ? (
              <div className="loading-line h-16 w-16 rounded-full"></div>
            ) : (
              <img alt={`${name} Discord's Avatar`} src={avatar} className="2xl:[h-75px] h-[60px] w-auto rounded-full object-cover lg:h-[70px]" />
            )}
            <h4 className={`ml-2 font-Montserrat text-lg font-bold sm:ml-3 sm:text-xl lg:ml-4 lg:text-2xl xl:text-3xl 2xl:text-4xl ${loading ? "loading-line" : "text-gradient"}`}>
              {name}
            </h4>
          </div>
          <p className={`inline-block font-semibold text-moon-gold lg:ml-6 lg:text-base 2xl:ml-8 ${loading && "loading-line"}`}>{time}</p>
        </div>

        {/*Content*/}
        <div className="mt-2 lg:mt-4 2xl:mt-6">
          <AnnouncementContent text={content} mentions={mentions} loading={loading} />
        </div>

        {/*Reactions*/}
        <div className="mt-3 flex lg:mt-5 2xl:mt-6">{reactions && reactions.map((reaction, i) => <Reaction key={i} reaction={reaction} index={i} loading={loading} />)}</div>
      </div>
    </article>
  );
};

export default Announcement;
