import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import ProposalSkeletons from "../../components/Skeletons/ProposalSkeletons";
import Header from "../../components/Header";
import { SectionLayout, Line } from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { PROPOSALS_QUERY } from "../../api/Proposals";
import { failedFetchAlert } from "../../hooks&utils/toasts";

const ProposalList = () => {
  const { data, loading, error } = useQuery(PROPOSALS_QUERY);

  if (error) failedFetchAlert();

  return (
    <SectionLayout>
      <Header text={"Proposals"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <Line />

      {loading || error ? (
        <ProposalSkeletons />
      ) : (
        data.proposals.map((e, i) => <Proposal key={e.id} idx={i} proposalId={e.id} title={e.title} author={e.author} state={e.state} startTime={e.start} endTime={e.end} />)
      )}
    </SectionLayout>
  );
};

export default ProposalList;
