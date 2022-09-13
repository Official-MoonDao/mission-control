import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import Header from "../../components/Header";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    proposals(first: 10, skip: 0, where: { space_in: ["tomoondao.eth"] }, orderBy: "created", orderDirection: desc) {
      id
      title
      body
      choices
      start
      end
      snapshot
      state
      scores
      scores_by_strategy
      scores_total
      scores_updated
      author
      space {
        id
        name
      }
    }
  }
`;

const ProposalList = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <section className="mt-[31px] flex flex-col xl:mt-0 xl:min-w-[700px] xl:mr-16 xl:rounded-lg xl:bg-white dark:xl:bg-opacity-[0.04] xl:px-[58px] xl:pt-[16px] xl:pb-[24px]">
      <Header text={"Proposals"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="mt-[34px] h-[1px] w-[335px] bg-black opacity-20 dark:bg-white sm:w-[400px] xl:w-full"></div>

      {data.proposals.map((e, i) => (
        <Proposal key={i} idx={i} proposalId={e.id} title={e.title} author={e.author} state={e.state} startTime={e.start} endTime={e.end} />
      ))}
    </section>
  );
};

export default ProposalList;
