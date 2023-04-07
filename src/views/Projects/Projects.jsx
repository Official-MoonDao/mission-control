import { PageLayout, SectionLayout, Line } from "../../components/Layout";
import { projectsData } from "./projects-data/projects";
import Project from "./Project";
import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../api/projectsGQL";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProjectList from "./ProjectList";
const snapshotClient = new ApolloClient({
  uri: "https://hub.snapshot.org/graphql",
  cache: new InMemoryCache(),
});

const Projects = () => {
  return (
    <ApolloProvider client={snapshotClient}>
      <PageLayout>
        <SectionLayout>
          <Header text={"Projects"} />
          <Line />
          <ProjectList />
        </SectionLayout>
      </PageLayout>
    </ApolloProvider>
  );
};

export default Projects;
