import ProposalList from "./ProposalList";
import OptionsContainer from "../../components/OptionsContainer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const snapshotClient = new ApolloClient({
  uri: "https://hub.snapshot.org/graphql",
  cache: new InMemoryCache(),
});

const Proposals = () => {
  return (
    <ApolloProvider client={snapshotClient}>
      <div className="mt-[65px] pb-[150px] xl:px-6">
        <div className="flex flex-col items-center xl:flex-row-reverse xl:items-start xl:justify-center">
          <OptionsContainer sectionOptions={["Proposals", "New Proposal", "About", "Settings"]} />

          <ProposalList />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default Proposals;
