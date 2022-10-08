import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-moon-gold duration-0" : "text-gray-900 duration-0 dark:text-gray-100")}>
      <p className="font-GoodTimes text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-xl">{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
