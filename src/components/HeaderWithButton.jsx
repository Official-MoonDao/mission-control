const HeaderWithButton = ({text, buttonTitle, link, img}) => {
    return (
    <div className="flex justify-between">
        <h3 className="font-GoodTimes text-[28px] sm:text-3xl lg:text-4xl text-gradient">{text}</h3>
        <div className="mt-1 flex items-center rounded-xl px-2 py-[4px] text-lg font-semibold capitalize lg:mt-2 lg:px-2 lg:text-xl rounded-[15px] border-[0.5px] border-gray-300 bg-white bg-opacity-40 dark:text-gray-100 shadow-md hover:scale-105 dark:bg-transparent dark:shadow-indigo-400">
            <img className="w-7 xl:w-8 h-auto" src={img} alt={`${buttonTitle} Logo.`}/>
            <a href={link} className="pl-2 hidden lg:block">{buttonTitle}</a>
            <p>→</p>
        </div>
    </div>
    )
  }
  
  export default HeaderWithButton