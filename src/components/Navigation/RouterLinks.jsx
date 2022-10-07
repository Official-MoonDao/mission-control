import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <ul className="lg:flex">
      <NavigationLink link="/" text="Announcements" />
      <NavigationLink link="/proposals" text="Proposals" />
      <NavigationLink link="/projects" text="Projects" />
      <NavigationLink link="/treasury" text="Treasury" />
      <NavigationLink link="https://app.dework.xyz/moondao" text="Bounties" Outside />
    </ul>
  );
};

export default RouterLinks;
