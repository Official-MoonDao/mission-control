import MobileMenu from "./MobileMenu";
import RouterLinks from "./RouterLinks";
import { Sun, Moon, LogoBlack, LogoWhite, LogoMobile, WalletMobile } from "../../assets";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`flex w-full items-center justify-between bg-gray-100 py-3 px-2 dark:bg-gray-900 sm:py-4 sm:px-5  2xl:px-6`}>
      <div className="flex items-center">
        <span className="inline xl:hidden">
          <LogoMobile />
        </span>
        <span className="hidden xl:inline">{darkMode ? <LogoWhite /> : <LogoBlack />}</span>
        <MobileMenu />
      </div>

      {/*Desktop links*/}
      <div className="hidden lg:flex">
        <RouterLinks />
      </div>

      <div className="flex items-center">
      {/*Color mode*/}
        <button className="mr-2 sm:mr-3" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      {/*Wallet*/}
        <button>
          <span className="sm:hidden">
            <WalletMobile />
          </span>
          <p className="hidden rounded bg-moon-gold py-[12px] px-[16px] font-semibold text-gray-900 sm:inline-block">Connect Wallet</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
