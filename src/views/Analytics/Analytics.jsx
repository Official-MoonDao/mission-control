import { useEffect, useState } from "react";
import { Line, PageLayout, SectionLayout } from "../../components/Layout";
import Holders from "./Charts/Holders";
import Pie from "./Charts/Pie";
import Frame from "./Frame";
import { getVMOONEYData } from "../../api/getVMOONEYAnalytics";
import HoldersList from "./HoldersList";
import Header from "../../components/Header";
import CustomCanvas from "../../components/r3f/CustomCanvas";
import { VMooneyCoin } from "../../components/r3f/vMooneyCoin";
import { MooneyCoin } from "../../components/r3f/MooneyCoin";
import { useAssets } from "../../api/useAssets";
import LoadingSpinner from "../../components/LoadingSpinner";
import AnalyticsSkeleton from "../../components/Skeletons/AnalyticsSkeleton";

function Data({ text, value, mooney, vmooney }) {
  return (
    <div className="justify-left flexflex-col w-full rounded-2xl p-4 lg:w-1/2">
      <div className=" w-full font-Montserrat font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white lg:text-[1.5vw] lg:text-2xl 2xl:text-[26px]">
        <p className="min-h-[6vh]">{text}</p>
        <hr className="relative mt-1 h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-400 dark:from-moon-gold dark:to-moon-orange" />
      </div>
      <div className="text-slate flex flex-col justify-center px-4  text-center font-Montserrat leading-10 hover:text-[#6ca3e6] dark:text-indigo-100  dark:hover:text-[orange] md:items-center lg:my-4 lg:flex-row lg:text-[3vw]">
        {" "}
        {value}
        {mooney && (
          <CustomCanvas>
            <MooneyCoin />
          </CustomCanvas>
        )}
        {vmooney && (
          <CustomCanvas>
            <VMooneyCoin />
          </CustomCanvas>
        )}
      </div>
    </div>
  );
}

function Label({ text }) {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center text-center font-Montserrat font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white lg:text-[2.5vw]  2xl:text-[36px]">
      {text}
      <hr className="relative mt-1 h-1.5 w-[90%] bg-gradient-to-r from-blue-500 to-emerald-400 dark:from-moon-gold dark:to-moon-orange" />
    </div>
  );
}

function Analytics() {
  const [data, setData] = useState({});
  const [lightMode, setLightMode] = useState(false);
  const { tokens } = useAssets();

  let circulatingSupply = 2618632244 - tokens[0]?.balance;

  useEffect(() => {
    (async () => {
      setData(await getVMOONEYData());
    })();
  }, []);

  useEffect(() => {
    setLightMode(localStorage.getItem("lightMode") === "true" ? true : false);
  }, [localStorage]);

  if (!data.holders) return <AnalyticsSkeleton />;

  return (
    <PageLayout>
      <SectionLayout>
        <div className="">
          <Header text={"Analytics"} />
          <Line />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="component-background relative top-10  mb-24 flex  w-[80vw] flex-col justify-center gap-8 rounded-2xl p-10">
            <Label text="vMooney Key Figures" />
            <div className="blur-background z-[-10] rounded-2xl" />
            <div className="flex flex-col justify-around lg:flex-row">
              <Data
                text={"vMOONEY Balance"}
                value={Math.round(data.totals.vMooney).toLocaleString("en-US")}
                vmooney
              />
              <Data
                text={"Locked MOONEY"}
                value={Math.round(data.totals.Mooney).toLocaleString("en-US")}
                mooney
              />
            </div>
            <div className="absolute left-[0] top-[50%]">
              <div className="mt-[75px] h-[2px] w-[80vw] bg-gradient-to-r from-blue-500 to-emerald-400 dark:from-moon-gold dark:to-moon-orange lg:h-[3px] lg:w-full" />
            </div>
            <div className="flex flex-col justify-around lg:flex-row">
              <Data
                text={"Circulating MOONEY Staked"}
                value={
                  tokens[0] ? (
                    ((data.totals.Mooney / circulatingSupply) * 100).toFixed(
                      2
                    ) + "%"
                  ) : (
                    <LoadingSpinner />
                  )
                }
              />
              <Data text={"Holders"} value={data.holders.length} />
              <Data
                text={"Average Staking Period"}
                value={data.totals.AvgStakingPeriod}
              />
            </div>
          </div>
          <Frame>
            <div className="flex flex-col px-4 lg:w-1/2">
              <div className="relative lg:right-[20%]">
                <Label text="vMOONEY Distribution" />
              </div>

              <Pie data={data.distribution} lightMode={lightMode} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <HoldersList
                itemsPerPage={window.innerHeight > 1080 ? 10 : 5}
                data={data.holdersByVMooney}
              />
            </div>
          </Frame>
          <Frame>
            <div className="flex flex-col">
              <Label text="vMOONEY Holders Over Time" />

              <Holders data={data.holders} lightMode={lightMode} />
            </div>
          </Frame>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

export default Analytics;
