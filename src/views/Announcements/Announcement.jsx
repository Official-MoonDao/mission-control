import Reaction from "./Reaction";
import AnnouncementContent from "./AnnouncementContent";
import React from "react";
import BlurBackground from "../../components/Layout/BlurBackground";

const Announcement = React.forwardRef(({ content, mentions, author, timestamp, reactions, loading, attachments }, ref) => {
  const avatar = `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.webp?size=80`;
  const name = author.username;
  const time = new Date(timestamp).toDateString();

  const AnnouncementBody = (
    <div className={`relative mt-10 w-[336px] rounded-2xl text-gray-900  sm:w-[400px] lg:mt-10 lg:w-full lg:max-w-[1080px] ${loading && "loading-component"}`}>

      <BlurBackground/>


      <div className="component-background relative rounded-2xl border border-gray-300 px-3 py-3 sm:px-4 lg:py-5 lg:px-6 xl:px-12 xl:py-9">
        {/*Avatar, Name, Date */}
        <div className="flex items-center">
          {loading ? (
            <div className="loading-line h-16 w-16 rounded-full"></div>
          ) : (
            <img alt={`${name} Discord's Avatar`} src={avatar} className="h-[60px] w-auto rounded-full object-cover lg:h-[85px] lg:border lg:border-blue-600 lg:border-opacity-50 lg:dark:border-yellow-200 lg:p-1" />
          )}

          <div className="ml-6 lg:ml-7 flex flex-col">
            <p className={`inline-block font-mono text-sm text-moon-gold dark:text-yellow-100 xl:text-base ${loading && "loading-line"}`}>{time}</p>
            <h4
              className={`mt-1 font-GoodTimes text-xl lg:text-3xl xl:text-3xl ${
                loading ? "loading-line" : "bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent dark:to-yellow-100 dark:from-amber-600"
              }`}
            >
              {name}
            </h4>
          </div>
        </div>

        {/*Content*/}
        <div className="mt-2 lg:mt-4 2xl:mt-6">
          <AnnouncementContent text={content} mentions={mentions} loading={loading} />
        </div>

        {/*Attachments*/}
        <div className="mt-2 grid gap-4 lg:mt-4 2xl:mt-6">
          {attachments && attachments.map((attachment, i) => <img className="h-auto max-w-[300px] lg:max-w-[400px] 2xl:max-w-[450px]" key={i} src={attachment.url} />)}
        </div>

        {/*Reactions*/}
        <div className="mt-3 flex overflow-x-auto lg:mt-5 2xl:mt-6 p-1">
          {reactions && reactions.map((reaction, i) => <Reaction key={i} reaction={reaction} index={i} loading={loading} />)}
        </div>
      </div>
    </div>
  );

  const result = ref ? <article ref={ref}>{AnnouncementBody}</article> : <article>{AnnouncementBody}</article>;

  return result;
});

export default Announcement;
