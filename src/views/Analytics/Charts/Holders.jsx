import { ResponsiveLine } from "@nivo/line";
function Holders({ data }) {
  if (!data) return;
  const formattedData = [
    {
      id: "holders",
      data: data,
    },
  ];
  return (
    <ResponsiveLine
      data={formattedData}
      margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        reverse: false,
      }}
      xScale={{ format: "%Y-%m-%d", type: "time" }}
      xFormat="time:%Y-%m-%d"
      axisLeft={null}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2s",
        legend: "holders",
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
      enableGridY={false}
      pointSize={0}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      theme={{
        textColor: "white",
      }}
      colors={["orange"]}
      legends={[
        {
          itemTextColor: "white",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 110,
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
