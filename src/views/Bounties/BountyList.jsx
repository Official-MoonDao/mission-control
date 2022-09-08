import SearchBar from "../../components/SearchBar";
import { bountyTests } from "../../test-data/tests";
import Bounty from "./Bounty";
import Header from "../../components/Header";
const BountyList = () => {
  return (
    <section className="flex flex-col mt-[31px]">
      <Header text={"Open Bounties"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>

      <div className="w-[335px] mt-[34px] bg-white opacity-20 h-[1px]"></div>

      {bountyTests.map((e, i) => (
        <Bounty key={i} idx={i} title={e.title} date={e.date} img={e.img} mooney={e.mooney} dollars={e.dollars} />
      ))}
    </section>
  );
};

export default BountyList;
