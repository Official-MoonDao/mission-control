import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-moon-gold" : "text-gray-900 dark:text-gray-100 ")}>
      <p className="pl-2 pt-2 text-lg font-semibold lg:pt-0 lg:text-[18px] lg:px-3 xl:px-5 2xl:px-10 2xl:text-xl ">{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
