import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, text }) => {
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-yellow-600" : "dark:text-gray-100 text-gray-900 ")}>
      <p className="text-lg pl-2 pt-2 font-semibold">{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
