import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={(element) =>
          element.isActive ? "font-extrabold text-blue-500 dark:text-moon-gold" : "font-semibold text-gray-800 hover:text-blue-400 dark:text-gray-100 hover:dark:text-amber-200"
        }
      >
        <p className="text-xl hover:scale-105 sm:text-2xl lg:text-base xl:text-lg 2xl:text-xl">{text}</p>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
