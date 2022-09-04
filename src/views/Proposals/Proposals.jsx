import ProposalList from "./ProposalList";
import OptionsContainer from "../../components/OptionsContainer";

const Proposals = () => {


  return (
    <div className="mt-[65px] pb-[150px]">
      <div className="flex flex-col items-center">
       
       <OptionsContainer sectionOptions={["Proposal", "New Proposal", "About", "Settings"]} />


        <ProposalList />
      </div>
    </div>
  );
};

export default Proposals;
