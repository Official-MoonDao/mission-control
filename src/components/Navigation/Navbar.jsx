import MobileMenu from "./MobileMenu";
import RouterLinks from "./RouterLinks";
import { Sun, Moon, LogoBlack, LogoWhite, LogoMobile, DiscordIcon } from "../../assets";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`flex w-full items-center justify-between bg-gradient-to-r from-gray-100 via-amber-50 to-white py-3 px-3 dark:from-slate-800 dark:via-slate-900 dark:to-gray-900  sm:py-4 sm:px-6 xl:pr-10`}
    >
      {/*Mobile logo and Mobile Menu */}
      <div className="flex items-center xl:hidden">
        <LogoMobile />
        <span className="lg:hidden">
          <MobileMenu />
        </span>
      </div>

      {/*Main logo*/}
      <div className="hidden xl:flex relative right-5">{darkMode ? <LogoWhite /> : <LogoBlack />}</div>

      <ul className="hidden w-full justify-around lg:flex relative xl:right-5">
        <RouterLinks />
      </ul>

      {/*Color mode and discord link*/}
      <div className="flex lg:ml-2">
        <button className="mr-3  xl:mr-5" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <a href="https://discord.com/invite/5nAu7K9aES" target="_blank">
          <DiscordIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
