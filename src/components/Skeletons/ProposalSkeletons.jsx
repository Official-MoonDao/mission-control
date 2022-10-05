import Proposal from "../../views/Proposals/Proposal";

const ProposalSkeletons = () => {
  const skeletonData = {
    title: "Loading MoonDAO members proposals. If loading takes too long, contact MoonDAO Discord.",
    author: "0x679d87D8640e66778c3419D164998E720D7495f6",
  };
  return (
    <>
      {Array(10)
        .fill(skeletonData)
        .map((e, i) => (
          <Proposal loading={true} key={i} idx={i} title={e.title} author={e.author} />
        ))}
    </>
  );
};

export default ProposalSkeletons;
