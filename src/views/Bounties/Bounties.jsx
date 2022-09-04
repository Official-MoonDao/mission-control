
import OptionsContainer from "../../components/OptionsContainer";
import BountyList from "./BountyList";
const Bounties = () => {
  return (
    <div className="mt-[65px] pb-[150px]">
      <div className="flex flex-col items-center">
        <OptionsContainer sectionOptions={["Development Guild", "Design Guild", "Growth Guild", "Space Guild"]}/>

        <BountyList />

      </div>
    </div>
  );
};

export default Bounties;
