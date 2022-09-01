import NavigationLink from "./NavigationLink";
import { Sun, Moon, MoonDaoLogoBlack, MoonDaoLogoWhite, MoonDAOLogoMobile, MoonDAOMenu, MoonDAOWalletMobile } from "../assets";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";

const Navbar = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <nav className={`w-full items-center flex justify-between bg-gray-900 py-3 px-2`}>
      <div className="flex items-center">
        <MoonDAOLogoMobile />

        <button className="ml-1"><MoonDAOMenu/></button>

        <div className="hidden md:flex">
          <NavigationLink link="/" text="Announcements" />
          <NavigationLink link="/balance" text="Balance" />
          <NavigationLink link="/bounties" text="Bounties" />
          <NavigationLink link="/proposals" text="Proposals" />
          <NavigationLink link="/treasury" text="Treasury" />
        </div>
      </div>

      <div className="flex items-center">
        <button className="mr-2" onClick={toggleTheme}>{darkTheme ? <Sun /> : <Moon />}</button>
        <button>
          <MoonDAOWalletMobile />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
