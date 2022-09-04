import React from "react";
import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import { proposalTests } from "../../test-data/tests";

const ProposalList = () => {
  return (
    <section className="flex flex-col mt-[31px]">
      <h3 className="text-left font-Montserrat text-[28px] text-white">Proposals</h3>
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
