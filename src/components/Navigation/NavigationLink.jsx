import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-moon-gold" : "text-gray-800 dark:text-gray-100")}>
      <p className="font-GoodTimes text-lg sm:text-xl lg:text-base xl:text-[17px] 2xl:text-xl hover:scale-105 hover:text-yellow-500 hover:dark:text-amber-400">{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
