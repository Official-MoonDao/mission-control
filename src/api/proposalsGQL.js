import { gql } from "@apollo/client/core";

export const PROPOSALS_QUERY = gql`
query Proposals( $skip:Int) {
  proposals(first: 10, skip: $skip, where: {space_in: ["tomoondao.eth"]}, orderBy: "created", orderDirection: desc) {
    id
    title
    body
    choices
    start
    end
    snapshot
    state
    author
    space {
      id
      name
    }
  }
}

`;

export const authorMappings = {
  "0x679d87D8640e66778c3419D164998E720D7495f6": "@pmoncada",
};


