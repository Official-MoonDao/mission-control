import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <li>
      <NavLink to={link} className={(element) => (element.isActive ? "text-moon-gold" : "text-gray-800 dark:text-gray-100")}>
      <p className="font-mono text-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl hover:scale-105 hover:text-yellow-500 hover:dark:text-amber-400">{text}</p>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
