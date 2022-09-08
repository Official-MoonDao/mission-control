import RouterLinks from "./RouterLinks";
import { Sun, Moon, LogoBlack, LogoWhite, LogoMobile, Menu, WalletMobile, MenuClose } from "../assets";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <nav className={`flex w-full items-center justify-between bg-gray-100 py-3 sm:py-4 px-2 sm:px-5 2xl:px-6  dark:bg-gray-900`}>
      <div className="flex items-center">
        <span className="inline xl:hidden"><LogoMobile /></span>
        <span className="hidden xl:inline">{darkMode? <LogoWhite /> :<LogoBlack/>}</span>


        {/* Mobile menu / links */}
        <div className="relative flex items-center lg:hidden ">
          <button className="ml-1 sm:ml-3" onClick={() => setToggleLinks((toggleLinks) => !toggleLinks)}>
            {toggleLinks ? <MenuClose /> : <Menu />}
          </button>

          <div className={`${!toggleLinks ? "hidden" : "flex"} absolute top-[55px] sm:left-[10px]  left-[5px] z-10 w-[195px] sm:w-[250px] rounded bg-gray-100 dark:bg-gray-900`}>
            <ul className="flex flex-col items-start p-2 pt-4 sm:p-3">
              <RouterLinks />
            </ul>
          </div>
        </div>

        {/*Desktop links*/}
        <div className="hidden lg:flex lg:pl-3">
          <RouterLinks />
        </div>
      </div>

      {/*Color mode and Wallet */}
      <div className="flex items-center">
        <button className="mr-2 sm:mr-3" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>


          <button >
            <span className="sm:hidden"><WalletMobile/></span>
            <p className="hidden sm:inline-block bg-moon-gold text-gray-900 rounded font-semibold py-[12px] px-[16px]">Connect Wallet</p>
          </button>


      </div>
    </nav>
  );
};

export default Navbar;
