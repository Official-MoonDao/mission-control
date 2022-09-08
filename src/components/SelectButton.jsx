//Handle true active state

const SelectButton = ({ text }) => {
  return (
    <button className="border-l-[3px] border-transparent px-[42px] py-3 text-[22px] font-semibold text-black opacity-60 hover:border-moon-gold hover:opacity-100 dark:text-gray-200 dark:hover:text-white dark:opacity-100">
      {text}
    </button>
  );
};

export default SelectButton;
