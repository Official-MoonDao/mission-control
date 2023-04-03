import { Fragment } from "react";
import { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BellIcon, CalendarIcon, ChartPieIcon, FolderIcon, WalletIcon, RocketLaunchIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ExternalLinks from "./ExternalLinks";
import { TreasuryAndMobileLogo } from "../../assets";
import NavigationLink from "./NavigationLink";

const MobileMenu = ({ lightMode, sidebarOpen, setSidebarOpen }) => {
  /*A useEffect used because the Dialog Headless UI component doesn't naturally recognize Dark Mode classes */
  useEffect(() => {
    if (!lightMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [lightMode]);

  const navigation = [
    { name: "Proposals", href: "/", icon: RocketLaunchIcon },
    { name: "Announcements", href: "/announcements", icon: BellIcon },
    { name: "Projects", href: "/projects", icon: FolderIcon },
    { name: "Treasury", href: "/treasury", icon: WalletIcon },
    { name: "Analytics", href: "/analytics", icon: ChartPieIcon },
    { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  ];

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex w-[320px]">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {/*The actual menu inside */}
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white px-3 pb-4 pt-5 dark:bg-slate-950">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <a href="https://moondao.com">
                <div className="flex flex-shrink-0 items-center px-4">
                  <TreasuryAndMobileLogo />
                </div>
              </a>
              <div className="mt-10 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {navigation.map((item, i) => (
                    <NavigationLink item={item} key={i} />
                  ))}

                  <div className="ml-5 pt-20">
                    <ExternalLinks />
                  </div>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
