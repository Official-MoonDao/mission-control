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
        <div className="absolute opacity-[0.5]">
          <Frame>
            <Balance data={data.balance} />
          </Frame>
        </div>
        <div className="">
          <Frame>
            <Holders data={data.holders} />
          </Frame>
        </div>
        <div className="">
          <div className="h-[100vh] w-[80vw]">
            <Pie data={data.distribution} />
          </div>
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
