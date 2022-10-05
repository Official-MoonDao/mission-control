import { gql } from "@apollo/client/core";

export const PROPOSALS_QUERY = gql`
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

export const authorMappings = {
  "0x679d87D8640e66778c3419D164998E720D7495f6": "@pmoncada",
};