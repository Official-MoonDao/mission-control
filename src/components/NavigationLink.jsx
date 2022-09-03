import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NavigationLink = ({ link, text }) => {
  const darkTheme = useTheme();
  return (
    <NavLink to={link} className={(element) => (element.isActive ? "text-yellow-600" : `${darkTheme ? "text-gray-100" : "text-gray-900"}`)}>
      <p className={` text-xl`}>{text}</p>
    </NavLink>
  );
};

export default NavigationLink;
