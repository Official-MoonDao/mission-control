import RouterLinks from "./RouterLinks";
import { Sun, Moon, LogoBlack, LogoWhite, LogoMobile, Menu, WalletMobile, MenuClose } from "../assets";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <nav className={`flex w-full items-center justify-between bg-gray-100 py-3 px-2 dark:bg-gray-900`}>
      <div className="flex items-center">
        <LogoMobile />

        {/* Mobile menu / links */}
        <div className="relative flex items-center md:hidden ">
          <button className="ml-1" onClick={() => setToggleLinks((toggleLinks) => !toggleLinks)}>
            {toggleLinks ? <MenuClose /> : <Menu />}
          </button>

          <div className={`${!toggleLinks ? "hidden" : "flex"} absolute top-[55px]  left-[5px] z-10 w-[195px] rounded bg-gray-100 dark:bg-gray-900`}>
            <ul className="flex flex-col items-start p-2 pt-4">
              <RouterLinks />
            </ul>
          </div>
        </div>

        {/*Desktop links*/}
        <div className="hidden md:flex">
          <RouterLinks />
        </div>
      </div>

      {/*Color mode and Wallet */}
      <div className="flex items-center">
        <button className="mr-2" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <button>
          <WalletMobile />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
