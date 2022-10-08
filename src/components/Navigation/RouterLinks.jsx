import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <>
      <NavigationLink link="/" text="Announcements" />
      <NavigationLink link="/proposals" text="Proposals" />
      <NavigationLink link="/projects" text="Projects" />
      <NavigationLink link="/treasury" text="Treasury" />
      <a className="font-GoodTimes text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-900 dark:text-gray-100" href="https://app.dework.xyz/moondao" target="_blank">
        Bounties
      </a>
    </>
  );
};

export default RouterLinks;
