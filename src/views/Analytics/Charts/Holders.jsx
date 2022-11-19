// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
function Holders(props) {
  if (!props.data[0]) return;
  return (
    <ResponsiveLine
      data={props.data}
      margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
      yScale={{ type: "linear" }}
      xScale={{ format: "%Y-%m-%d", type: "time" }}
      xFormat="time:%Y-%m-%d"
      axisLeft={{
        tickValues: "auto",
        tickSize: 0.01,
        tickPadding: 5,
        tickRotation: 0,
        format: ".2s",
        legend: "price",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      axisBottom={{
        tickValues: "every month",
        tickSize: 5,
        tickRotation: -15,
        orient: "left",
        format: "%Y-%m-%d",
        legend: "day",
        legendOffset: 40,
        legendPosition: "middle",
      }}
      gridXValues={false}
      pointSize={0}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      legends={[
        {
          symbolShape: "circle",
          symbolBorderColor: "rgba(0,0,0,0.5)",
        },
      ]}
    />
  );
}

export default Holders;
