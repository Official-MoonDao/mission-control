import ShieldContainer from "./ShieldContainer";
import SelectButton from "./SelectButton";

const OptionsContainer = ({ sectionOptions }) => {
  return (
    <div className="w-[335px] rounded-lg shadow-lg dark:border-[0.5px] dark:bg-transparent bg-white dark:border-white dark:border-opacity-[0.38]">
      <ShieldContainer />

      <div className="flex flex-col items-start pt-[38px] pb-[29px]">
        {sectionOptions.map((e, i) => (
          <SelectButton key={i} text={e} />
        ))}
      </div>
    </div>
  );
};

export default OptionsContainer;
