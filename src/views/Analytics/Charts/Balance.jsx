import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Balance({ data }) {
  if (!data) return;
  return (
    <ResponsiveBar
      data={data}
      keys={["balance"]}
      indexBy="date"
      margin={{ top: 20, right: 100, bottom: 50, left: 50 }}
      padding={0.3}
      maxValue={0.08}
      groupMode="grouped"
      gridXValues={false}
      gridYValues={false}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "lines",
          type: "patternDots",
          background: "inherit",
          color: "#D7594F",
          size: 4,
          spacing: 5,
        },
      ]}
      //   fill={[
      //     {
      //       match: {
      //         id: "balance",
      //       },
      //       id: "lines",
      //     },
      //   ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={false}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      role="application"
    />
  );
}
export default Balance;
