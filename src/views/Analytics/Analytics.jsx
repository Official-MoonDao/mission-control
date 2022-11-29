import axios from "axios";

import { useEffect, useState } from "react";
import {
  Line,
  PageLayout,
  PaginationContainer,
  SectionLayout,
} from "../../components/Layout";
import {
  getHistoricalMOONEYBalance,
  getHistoricalMOONEYBalanceBar,
} from "../../api/analytics/getMOONEYAnalytics";

import Balance from "./Charts/Balance";
import Holders from "./Charts/Holders";
import Pie from "./Charts/Pie";
import Frame from "./Frame";
import { getVMOONEYData } from "../../api/analytics/getVMOONEYAnalytics";
import HoldersList from "./HoldersList";
import Header from "../../components/Header";
function Title({ text }) {
  return (
    <div className="font-Montserrat text-[2vw] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white lg:text-2xl 2xl:text-[26px]">
      {text}{" "}
    </div>
  );
}

function Number({ value }) {
  return (
    <div className="w-ful my-10 text-center font-Montserrat text-[4.5vw] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-[orange]">
      {value}
    </div>
  );
}

const pieData = [
  {
    id: "treasury",
    label: "treasury",
    value: 1000,
    color: "hsl(243, 70%, 50%)",
  },
  {
    id: "holders",
    label: "holders",
    value: 100,
    color: "hsl(243, 70%, 50%)",
  },
];

function Analytics() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      setData(await getVMOONEYData());
    })();
  }, []);
  if (!data.holders) return;
  return (
    <PageLayout>
      <SectionLayout>
        <div className="">
          <Header text={"Analytics"} />
          <Line />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="component-background relative top-10  mb-24 flex flex h-[70vh] w-[80vw] flex-col justify-center rounded-2xl p-10">
            <div className="blur-background z-[-10] rounded-2xl" />
            <div className=" flex flex-col rounded-2xl p-4">
              <Title text={"vMooney Balance : "} />
              <Number value={data.totals.vMooney} />
            </div>
            <div className="flex flex-col rounded-2xl p-4">
              <Title text={"Locked $Mooney : "} />
              <Number value={data.totals.Mooney} />
            </div>
          </div>
          <Frame>
            <Pie data={data.distribution} />
            <HoldersList itemsPerPage={5} holders={data.holders} />
          </Frame>
          <Frame>
            <Holders data={data.holders} />
          </Frame>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

export default Analytics;
