import { MoonDAOShield } from "../../assets";
import SelectButton from "../../components/SelectButton";

const Proposals = () => {
  return (
    <div className="mt-[65px] flex flex-col items-center">
      <div className="rounded-lg w-[335px] border-[0.5px] border-white border-opacity-[0.38]">
        <div className="flex justify-center border-b-[0.5px] border-opacity-[0.38] py-[24px] border-white">
          <img src={MoonDAOShield} className="w-[102px] h-[102px]" alt="" />
        </div>

        <div className="flex flex-col items-start pt-[38px] pb-[29px]">
          <SelectButton text="Proposals"/>
          <SelectButton text="New Proposal"/>
          <SelectButton text="About"/>
          <SelectButton text="Settings"/>
        </div>
      </div>
      
    </div>
  );
};

export default Proposals;
