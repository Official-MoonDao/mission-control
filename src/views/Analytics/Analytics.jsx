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
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(await getHistoricalMOONEYBalance());
      setBarData(await getHistoricalMOONEYBalanceBar());
      // console.log(await getVMOONEYData());
    })();
  }, []);
  if (!data) return;
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <div className="absolute opacity-[0.5]">
          <Frame>
            <Balance data={barData} />
          </Frame>
        </div>
        <div className="z-10">
          <Frame>
            <Holders data={data} />
          </Frame>
        </div>
        <div className="">
          <Frame>
            <Pie data={pieData} />
          </Frame>
          <Frame></Frame>
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
