const Header = ({text, position}) => {
  return (
    <h3 className={`font-GoodTimes text-[28px] sm:text-3xl lg:text-4xl text-gradient ${position}`}>{text}</h3>
  )
}

export default Header