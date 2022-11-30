import { useEffect, useState } from "react";
import { Line, PageLayout, SectionLayout } from "../../components/Layout";
import Holders from "./Charts/Holders";
import Pie from "./Charts/Pie";
import Frame from "./Frame";
import { getVMOONEYData } from "../../api/getVMOONEYAnalytics";
import HoldersList from "./HoldersList";
import Header from "../../components/Header";
function Data({ text, value }) {
  return (
    <div className="justify-left flex w-full flex-col rounded-2xl p-4">
      <div className="m-2 font-Montserrat text-[1.5vw] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white lg:text-2xl 2xl:text-[26px]">
        {text}
        <hr className="relative bottom-1.5 mt-4 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 dark:from-moon-gold dark:to-moon-orange" />
      </div>
      <div className="w-ful text-slate px-4 text-center font-Montserrat  text-[3vw] leading-10 hover:text-[#6ca3e6] dark:text-indigo-100 dark:hover:text-[orange]">
        {" "}
        {value}
      </div>
    </div>
  );
}

function Analytics() {
  const [data, setData] = useState({});
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    (async () => {
      setData(await getVMOONEYData());
    })();
  }, []);
  useEffect(() => {
    setLightMode(localStorage.getItem("lightMode") === "true" ? true : false);
  }, [localStorage]);
  if (!data.holders) return;
  return (
    <PageLayout>
      <SectionLayout>
        <div className="">
          <Header text={"Analytics"} />
          <Line />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="component-background relative top-10  mb-24 flex  w-[80vw] flex-col justify-center gap-8 rounded-2xl p-10">
            <div className="blur-background z-[-10] rounded-2xl" />
            <div className="flex flex-col justify-around lg:flex-row">
              <Data text={"vMooney Balance"} value={data.totals.vMooney} />
              <Data text={"Locked Mooney"} value={data.totals.Mooney} />
            </div>
            <div className="absolute left-[0] top-[40%]">
              <div className="mt-[25px] h-[2px] w-[80vw] bg-gradient-to-r from-blue-500 to-emerald-400 dark:from-moon-gold dark:to-moon-orange lg:h-[3px] lg:w-full" />
            </div>
            <div className="flex flex-col justify-around lg:flex-row">
              <Data
                text={"% of Circulating Mooney Staked"}
                value={data.totals.PercentStaked}
              />
              <Data text={"Holders"} value={data.holders.length} />
              <Data
                text={"AVG Staking Period"}
                value={data.totals.AvgStakingPeriod}
              />
            </div>
          </div>
          <Frame>
            <Pie data={data.distribution} lightMode={lightMode} />
            <div className="flex flex-col items-center justify-center">
              <HoldersList itemsPerPage={5} data={data.holdersByVMooney} />
            </div>
          </Frame>
          <Frame>
            <Holders data={data.holders} lightMode={lightMode} />
          </Frame>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

export default Analytics;
