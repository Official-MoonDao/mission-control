import axios from "axios";

import { useEffect, useState } from "react";
import {
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
function Title({ text }) {
  return (
    <div className="font-Montserrat text-[22px] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-white lg:text-2xl  2xl:text-[26px]">
      {text}{" "}
    </div>
  );
}

function Number({ value }) {
  return (
    <div className="w-ful my-10 text-center font-Montserrat text-[40px] font-bold leading-10 text-slate-800 hover:text-black dark:text-indigo-100 dark:hover:text-[orange]">
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
  const [page, setPage] = useState(0);
  useEffect(() => {
    (async () => {
      setData(await getVMOONEYData());
    })();
  });
  if (!data.holders) return;
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <div className="component-background relative bottom-16 my-16 flex flex h-[80vh] w-[80vw] flex-col justify-center gap-[30%] rounded-2xl p-20">
          <div className="blur-background z-[-10] rounded-2xl" />
          <div>
            <Title text={"vMooney Balance : "} />
            <Number value={data.totals.vMooney} />
          </div>
          <div>
            <Title text={"Locked $Mooney : "} />
            <Number value={data.totals.Mooney} />
          </div>
        </div>
        <Frame>
          <Pie data={data.distribution} />
        </Frame>
        <div className="absolute">
          {/* <Frame>
            <Balance data={data.balance} />
          </Frame> */}
        </div>
        <div className="">
          <Frame>
            <Holders data={data.holders} />
          </Frame>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

export default Analytics;

///formatting for chart
/*
setData([
  {
    id: "mooney",
    color: "hsl(38, 70%, 50%)",
    data: res.data.prices.map((price) => ({
      x: String(moment(price[0]).format("YYYY-MM-DD")),
      y: price[1],
    })),
  },
]);
*/
