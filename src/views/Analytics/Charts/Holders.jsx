// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
function Holders({ data }) {
  if (!data) return;
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 100, bottom: 50, left: 50 }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      xScale={{ format: "%Y-%m-%d", type: "time" }}
      xFormat="time:%Y-%m-%d"
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2f",
        legend: "price",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      axisBottom={{
        tickValues: "every month",
        tickSize: 5,
        tickRotation: -15,
        orient: "left",
        format: "%m-%y",
        legend: "",
        legendOffset: 40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={true}
      pointSize={0}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.85,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default Holders;
