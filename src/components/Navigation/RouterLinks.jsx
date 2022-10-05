import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <ul className="lg:flex">
      <NavigationLink link="/" text="Announcements" />
      <NavigationLink link="/proposals" text="Proposals" />
      <NavigationLink link="/treasury" text="Treasury" />
      <NavigationLink link="/bounties" text="Bounties" />
      <NavigationLink link="/projects" text="Projects" />
    </ul>
  );
};

export default RouterLinks;
