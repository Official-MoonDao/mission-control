import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import ProposalSkeletons from "../../components/Skeletons/ProposalSkeletons";
import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { PROPOSALS_QUERY } from "../../api/Proposals";

const ProposalList = () => {
  const { data, loading, error } = useQuery(PROPOSALS_QUERY);

  if (error) return <pre>{error.message}</pre>;

  return (
    <section
      className={`mt-[31px] flex flex-col xl:mt-0 xl:mr-16 xl:min-w-[700px] xl:rounded-lg xl:bg-white xl:bg-opacity-60 xl:px-[58px] xl:pt-[16px] xl:pb-[24px] dark:xl:bg-opacity-[0.04]`}
    >
      <Header text={"Proposals"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="mt-[34px] h-[1px] w-[335px] bg-black opacity-20 dark:bg-white sm:w-[400px] xl:w-full"></div>

      {loading ? (
        <ProposalSkeletons />
      ) : (
        data.proposals.map((e, i) => <Proposal key={e.id} idx={i} proposalId={e.id} title={e.title} author={e.author} state={e.state} startTime={e.start} endTime={e.end} />)
      )}
    </section>
  );
};

export default ProposalList;
