import SearchBar from "../../components/SearchBar";
import Proposal from "./Proposal";
import Header from "../../components/Header";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
{
  proposals (
    first: 5,
    skip: 0,
    where: {
      space_in: ["tomoondao.eth"]
    },
    orderBy: "created",
    orderDirection: desc
  ) {
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
  if (error) return <pre>{error.message}</pre>

  return (
    <section className="flex flex-col mt-[31px]">
      <Header text={"Proposals"}/>
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="w-[335px] mt-[34px] bg-white opacity-20 h-[1px]"></div>

      {data.proposals.map((e, i) => (
        <Proposal key={i} idx={i} proposalId={e.id} title={e.title} author={e.author} state={e.state} startTime={e.start} endTime={e.end}/>
      ))}
    </section>
  );
};

export default ProposalList;
