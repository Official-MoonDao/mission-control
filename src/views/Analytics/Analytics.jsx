import { useEffect, useState } from "react";
import { PageLayout, SectionLayout } from "../../components/Layout";
import Holders from "./Charts/Holders";
import Frame from "./Frame";
function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <Frame>
          <Holders data={data} />
        </Frame>
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
