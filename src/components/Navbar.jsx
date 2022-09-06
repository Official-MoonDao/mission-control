import RouterLinks from "./RouterLinks";
import { Sun, Moon, MoonDaoLogoBlack, MoonDaoLogoWhite, MoonDAOLogoMobile, MoonDAOMenu, MoonDAOWalletMobile } from "../assets";
import { useState } from "react";

const Navbar = ({ darkMode, changeColorMode }) => {
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <nav className={`w-full items-center flex justify-between dark:bg-gray-900 bg-gray-100 py-3 px-2`}>
      <div className="flex items-center">
        <MoonDAOLogoMobile />

        {/* Mobile menu / links */}
        <div className="relative md:hidden flex items-center ">
          <button className="ml-1" onClick={() => setToggleLinks((toggleLinks) => !toggleLinks)}>
            <MoonDAOMenu />
          </button>

          <div className={`${!toggleLinks ? "hidden" : "flex"} w-[195px] z-10  absolute top-[55px] rounded left-[5px] bg-gray-100 dark:bg-gray-900`}>
            <ul className="flex flex-col items-start p-2 pt-4">
              <RouterLinks/>
            </ul>
          </div>
        </div>

        {/*Desktop links*/}
        <div className="hidden md:flex">
          <RouterLinks/>
        </div>
      </div>

      {/*Color mode and Wallet */}
      <div className="flex items-center">
        <button className="mr-2" onClick={changeColorMode}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <button>
          <MoonDAOWalletMobile />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
