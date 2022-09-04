import ShieldContainer from "./ShieldContainer";
import SelectButton from "./SelectButton";

const OptionsContainer = ({sectionOptions}) => {
  return <div className="rounded-lg w-[335px] border-[0.5px] border-white border-opacity-[0.38]">

<ShieldContainer />

<div className="flex flex-col items-start pt-[38px] pb-[29px]">

    {sectionOptions.map((e,i) => <SelectButton key={i} text={e} />)}
    </div>


  </div>;
};

export default OptionsContainer;
