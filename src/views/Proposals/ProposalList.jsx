import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import { proposalTests } from "../../test-data/tests";
import Header from "../../components/Header";

const ProposalList = () => {
  return (
    <section className="flex flex-col mt-[31px]">
      <Header text={"Proposals"}/>
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="w-[335px] mt-[34px] bg-white opacity-20 h-[1px]"></div>

      {proposalTests.map((e, i) => (
        <Proposal key={i} idx={i} title={e.title} author={e.author} active={e.active} executionDays={e.executionDays} />
      ))}
    </section>
  );
};

export default ProposalList;
