import ProposalList from "./ProposalList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const snapshotClient = new ApolloClient({
  uri: "https://hub.snapshot.org/graphql",
  cache: new InMemoryCache(),
});

const Proposals = () => {
  return (
    <ApolloProvider client={snapshotClient}>
      <div className="mt-[65px] pb-[150px]">
        <div className="flex flex-col items-center">
          <ProposalList />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default Proposals;
