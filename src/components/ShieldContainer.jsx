import { MoonDAOShield } from "../assets";

const ShieldContainer = () => {
  return (
    <div className="flex justify-center border-b-[0.5px] border-opacity-20 border-black dark:border-opacity-[0.38] py-[24px] dark:border-white">
      <img src={MoonDAOShield} className="w-[102px] h-[102px]" alt="" />
    </div>
  );
};

export default ShieldContainer;
