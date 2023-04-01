import { NavLink } from "react-router-dom";

const NavigationLink = ({ item }) => {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-blue-200 text-blue-950 dark:bg-gray-800 dark:text-gray-50 hover:scale-100"
            : "text-gray-600 hover:bg-blue-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-200"
        } group flex items-center rounded-md px-2 py-2 font-medium hover:scale-105`
      }
    >
      <item.icon className=" mr-3 h-6 w-6 flex-shrink-0 text-blue-500 dark:text-moon-gold" aria-hidden="true" />
      {item.name}
    </NavLink>
  );
};

export default NavigationLink;
