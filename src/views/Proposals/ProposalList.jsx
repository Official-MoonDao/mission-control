import Proposal from "./Proposal";
import ProposalSkeletons from "../../components/Skeletons/ProposalSkeletons";
import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import { SectionLayout, Line } from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { PROPOSALS_QUERY } from "../../api/proposalsGQL";
import { errorToast } from "../../utilities/errorToast";

const ProposalList = () => {
  const { data, loading, error } = useQuery(PROPOSALS_QUERY);

  if (error) errorToast("Connection failed. Contact MoonDAO discord if the problem persists 🚀");

  return (
    <SectionLayout>
      <div className="flex flex-row justify-between">
        <Header text={"Proposals"} />
        <div className="hidden lg:block">
          <LinkButton text={"Snapshot"} img={"/snapshot-icon.png"} link={"https://snapshot.org/#/tomoondao.eth"} />
        </div>
      </div>

      <Line />
      <div className="mt-3 lg:hidden">
        <p className="text-lg font-semibold text-emerald-900 dark:text-gray-100">Click the proposal's title to read more.</p>
      </div>

      {loading || error ? (
        <ProposalSkeletons />
      ) : (
        data.proposals.map((e, i) => (
          <Proposal key={e.id} idx={i} proposalId={e.id} title={e.title} author={e.author} state={e.state} startTime={e.start} endTime={e.end} body={e.body} />
        ))
      )}
    </SectionLayout>
  );
};

export default ProposalList;
