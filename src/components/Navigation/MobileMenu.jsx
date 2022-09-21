import RouterLinks from "./RouterLinks";
import { useState } from "react";
import { Menu, MenuClose } from "../../assets";

const MobileMenu = () => {
  const [toggleLinks, setToggleLinks] = useState(false);
  return (
    <div className="relative flex items-center lg:hidden ">
      <button className="ml-1 sm:ml-3" onClick={() => setToggleLinks((toggleLinks) => !toggleLinks)}>
        {toggleLinks ? <MenuClose /> : <Menu />}
      </button>

      <div className={`${!toggleLinks ? "hidden" : "flex"} absolute top-[55px] left-[5px]  z-10 w-[195px] rounded bg-gray-100 dark:bg-gray-900 sm:left-[10px] sm:w-[250px]`}>
        <ul className="flex flex-col items-start p-2 pt-4 sm:p-3">
          <RouterLinks />
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
