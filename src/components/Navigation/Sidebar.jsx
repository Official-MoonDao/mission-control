import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { Bars3BottomLeftIcon, BellIcon, CalendarIcon, ChartPieIcon, FolderIcon, WalletIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import ExternalLinks from "./ExternalLinks";
import { LogoWhite, LogoBlack } from "../../assets";
import ColorAndSocialLinks from "./ColorAndSocialLinks";

const navigation = [
  { name: "Proposals", href: "/", icon: RocketLaunchIcon },
  { name: "Announcements", href: "/announcements", icon: BellIcon },
  { name: "Projects", href: "/projects", icon: FolderIcon },
  { name: "Treasury", href: "/treasury", icon: WalletIcon },
  { name: "Analytics", href: "/analytics", icon: ChartPieIcon },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
];

const Sidebar = ({ lightMode, setLightMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="relative z-10">
        <MobileMenu lightMode={lightMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col lg:w-64">
          {/* Sidebar component*/}
          <div className="flex flex-grow flex-col overflow-y-auto bg-gradient-to-b from-gray-50 via-zinc-50 to-gray-50 pt-5 dark:from-slate-950 dark:via-gray-950 dark:to-slate-950">
            <div className="flex flex-shrink-0 items-center px-4">{lightMode ? <LogoBlack /> : <LogoWhite />}</div>
            <div className="flex flex-grow flex-col pt-9 lg:pl-2">
              <nav className="flex-1 space-y-1 px-4">
                {navigation.map((item, i) => (
                  <NavigationLink item={item} key={i} />
                ))}
              </nav>
            </div>

            {/*External Links, Color mode and Social links*/}
            <div className="flex flex-col pb-6 pl-7 lg:pl-9">
              <div className="pb-14 pl-3">
                <ExternalLinks />
              </div>
              <ColorAndSocialLinks lightMode={lightMode} setLightMode={setLightMode} />
            </div>
          </div>
        </div>

        {/*This is the top bar for mobile, below MD*/}
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 justify-between bg-white shadow dark:bg-slate-900 md:hidden">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-moon-gold  md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6 dark:fill-current dark:text-gray-100" aria-hidden="true" />
            </button>

            <ColorAndSocialLinks lightMode={lightMode} setLightMode={setLightMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
