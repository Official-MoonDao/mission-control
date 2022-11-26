import axios from "axios";

import { useEffect, useState } from "react";
import { PageLayout, SectionLayout } from "../../components/Layout";
import {
  getHistoricalMOONEYBalance,
  getHistoricalMOONEYBalanceBar,
} from "../../api/analytics/getMOONEYAnalytics";

import Balance from "./Charts/Balance";
import Holders from "./Charts/Holders";
import Pie from "./Charts/Pie";
import Frame from "./Frame";
import { getVMOONEYData } from "../../api/analytics/getVMOONEYAnalytics";
import ArticleTitle from "../../components/ArticleTitle";

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
      console.log(data.balance);
    })();
  }, []);
  if (!data.balance || !data.holders) return;
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <Frame>
          <Pie data={data.distribution} />
        </Frame>
        <div className="component-background border-gray-30 my-16 h-[50vh] rounded-2xl border-[0.5px]">
          <div className="blur-background z-[-10]" />
          <div className="flex h-full w-full flex-col justify-center gap-8 p-10 text-center">
            <ArticleTitle text={"vMooney Distribution"} />
            <hr className="w-full"></hr>
            <div className="flex h-[80%] w-full flex-col justify-center rounded-2xl bg-white"></div>
          </div>
        </div>
        <div className="absolute">
          <Frame>
            <Balance data={data.balance} />
          </Frame>
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
