import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <>
      <NavigationLink link="/" text="Announcements" />
      <NavigationLink link="/proposals" text="Proposals" />
      <NavigationLink link="/projects" text="Projects" />
      <NavigationLink link="/treasury" text="Treasury" />
      <a className="after:content-['→'] after:absolute after:bottom-[2px] hover:text-emerald-800 dark:hover:text-indigo-200 after:-z-10 font-GoodTimes relative z-10 text-lg sm:text-xl lg:text-base xl:text-[17px] 2xl:text-xl text-gray-900 dark:text-gray-100" href="https://app.dework.xyz/moondao" target="_blank">
        Bounties
      </a>
    </>
  );
};

export default RouterLinks;
