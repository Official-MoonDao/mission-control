import SearchBar from "../../components/SearchBar";
import { bountyTests } from "../../test-data/tests";
import Bounty from "./Bounty";
import Header from "../../components/Header";
const BountyList = () => {
  return (
    <section className="mt-[31px] flex flex-col xl:mt-0 xl:min-w-[700px]  xl:px-[18px] xl:pt-[22px] xl:pb-[24px]">
      <Header text={"Open Bounties"} />
      <div className="mt-[20px]">
        <SearchBar />
      </div>


      <div className="mt-[34px] h-[1px] w-[335px] bg-black opacity-20 dark:bg-white sm:w-[400px] xl:w-full"></div>


      {bountyTests.map((e, i) => (
        <Bounty key={i} idx={i} title={e.title} date={e.date} img={e.img} mooney={e.mooney} dollars={e.dollars} />
      ))}
    </section>
  );
};

export default BountyList;
