import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import PageLayout from "../../components/Layout/PageLayout";
import EventCalendar from "./EventCalendar";

const snapshotClient = new ApolloClient({
  uri: "https://hub.snapshot.org/graphql",
  cache: new InMemoryCache(),
});

const Calendar = () => {
  return (
    <ApolloProvider client={snapshotClient}>
      <PageLayout>
        <EventCalendar />
      </PageLayout>
    </ApolloProvider>
  );
};

export default Calendar;
