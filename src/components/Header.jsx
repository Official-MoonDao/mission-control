import HighlightStar from "../assets/HighlightStar";

const Header = ({ text, position, noStar }) => {
  return (
    <div className="flex items-center">
      {noStar ? "" : <HighlightStar />}
      <h3 className={`${noStar ? "" : "lg:ml-2"} bg-gradient-to-r from-blue-800 to-blue-950 bg-clip-text text-transparent dark:from-yellow-200 dark:to-moon-gold font-GoodTimes text-[24px] sm:text-3xl lg:text-4xl ${position}`}>{text}</h3>
    </div>
  );
};

export default Header;
