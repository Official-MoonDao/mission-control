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
      <li className="relative z-10 text-xl font-medium text-gray-900 after:absolute after:-z-10 after:content-['→']  hover:text-emerald-800 dark:text-gray-100  dark:hover:text-indigo-200 sm:text-2xl lg:text-base xl:text-xl">
        <a
          name="MoonDAO Discord Link"
          href="https://app.dework.xyz/moondao"
          target="_blank"
        >
          Bounties
        </a>
      </li>
    </>
  );
};

export default RouterLinks;
