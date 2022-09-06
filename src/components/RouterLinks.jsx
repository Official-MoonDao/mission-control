import NavigationLink from "./NavigationLink";

const RouterLinks = () => {
  return (
    <>
      <NavigationLink link="/" text="Announcements" />
      <NavigationLink link="/proposals" text="Proposals" />
      <NavigationLink link="/treasury" text="Treasury Balance" />
      <NavigationLink link="/bounties" text="Open Bounties" />
      <NavigationLink link="/projects" text="Ongoing Projects" />
    </>
  );
};

export default RouterLinks;
