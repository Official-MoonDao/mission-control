import ShieldContainer from "./ShieldContainer";
import SelectButton from "./SelectButton";

const OptionsContainer = ({ sectionOptions }) => {
  return (
    <div className="w-[335px] sm:w-[400px] xl:w-[335px] rounded-lg shadow-lg border-[0.5px] bg-white dark:bg-opacity-[0.04] dark:border-white dark:border-opacity-[0.38]">
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
