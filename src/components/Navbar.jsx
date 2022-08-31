import NavigationLink from "./NavigationLink";
import { Sun, Moon, MoonDaoLogoBlack, MoonDaoLogoWhite } from "../assets";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";

const Navbar = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <nav className={`${darkTheme ? "bg-gray-900" : "bg-gray-300"} p-[24px] transition-all duration-500`}>
      <div className={`items-center flex justify-around`}>
        {darkTheme ? <MoonDaoLogoWhite /> : <MoonDaoLogoBlack />}
        <NavigationLink link="/" text="Announcements" />
        <NavigationLink link="/balance" text="Balance" />
        <NavigationLink link="/bounties" text="Bounties" />
        <NavigationLink link="/proposals" text="Proposals" />
        <NavigationLink link="/treasury" text="Treasury" />

        <button onClick={toggleTheme}>{darkTheme ? <Sun /> : <Moon />}</button>
      </div>
    </nav>
  );
};

export default Navbar;
