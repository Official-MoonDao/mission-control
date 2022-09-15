import OptionsContainer from "../../components/OptionsContainer";
import BountyList from "./BountyList";
const Bounties = () => {
  return (
    <div className="mt-[65px] xl:mt-[51px] pb-[150px] xl:flex xl:flex-col xl:items-center">
      <div className="flex flex-col items-center dark:bg-opacity-[0.04] xl:mx-12 xl:max-w-[1800px] xl:flex-row-reverse xl:items-start xl:justify-between xl:rounded-lg xl:bg-white xl:bg-opacity-60 xl:px-8 xl:pb-7 xl:shadow-lg">
        <div className="xl:mt-[81px] xl:ml-10 ">
          <OptionsContainer sectionOptions={["Development Guild", "Design Guild", "Growth Guild", "Space Guild"]} />
        </div>

        <BountyList />
      </div>
    </div>
  );
};

export default Bounties;
