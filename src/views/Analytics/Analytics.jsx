import axios from "axios";

import { useEffect, useState } from "react";
import { PageLayout, SectionLayout } from "../../components/Layout";
import {
  getHistoricalMOONEYBalance,
  getHistoricalMOONEYBalanceBar,
} from "../../utilities/getAnalytics";

import Balance from "./Charts/Balance";
import Holders from "./Charts/Holders";
import Frame from "./Frame";
function Analytics() {
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(await getHistoricalMOONEYBalance());
      setBarData(await getHistoricalMOONEYBalanceBar());
    })();
  }, []);
  if (!data) return;
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <div className="opacity-[0.5]">
          <Frame>
            <Balance data={barData} />
          </Frame>
        </div>
        <div className="z-10">
          <Frame>
            <Holders data={data} />
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
