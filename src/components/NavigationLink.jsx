import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-moon-gold" : "text-gray-900 dark:text-gray-100 ")}>
      <p className="pl-2 pt-2 text-lg font-semibold md:pt-0 lg:text-[17px] lg:p-3 lg:pl-0 2xl:p-5 2xl:text-xl ">{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
