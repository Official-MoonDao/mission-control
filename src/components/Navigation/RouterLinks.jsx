import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <>
      <NavigationLink link="/" text="Proposals" />
      <NavigationLink link="/announcements" text="Announcements" />
      <NavigationLink link="/projects" text="Projects" />
      <NavigationLink link="/treasury" text="Treasury" />
      <NavigationLink link="/analytics" text="Analytics" />
      <NavigationLink link="/calendar" text="Calendar" />
      <li className="relative z-10 text-xl font-semibold text-gray-800 hover:scale-105  dark:text-gray-100 sm:text-2xl lg:rounded-3xl lg:bg-blue-500 lg:px-2  lg:py-1 lg:text-base  lg:text-white  lg:dark:bg-amber-500 xl:text-lg 2xl:px-3 2xl:text-xl">
        <a name="MoonDAO Discord Link" href="https://app.dework.xyz/moondao" target="_blank">
          Bounties→
        </a>
      </li>
    </>
  );
};

export default RouterLinks;
