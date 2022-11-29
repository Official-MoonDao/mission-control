import { ResponsiveLine } from "@nivo/line";
import { patternDotsDef, patternSquaresDef } from "@nivo/core";
function Holders({ data, lightMode }) {
  if (!data) return;
  const formattedData = [
    {
      id: "holders",
      data: data,
    },
  ];
  console.log(formattedData);
  return (
    <div className="h-[80vh] w-[80vw]">
      <ResponsiveLine
        data={formattedData}
        key={"holders"}
        margin={{ top: 50, right: 75, bottom: 100, left: 50 }}
        yScale={{
          type: "linear",
          min: "0",
          max: `${data.length + 10}`,
          reverse: false,
        }}
        xScale={{ format: "%Y-%m-%d", type: "time" }}
        xFormat="time:%Y-%m-%d"
        axisLeft={null}
        axisRight={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          format: ".2s",
          legend: "",
          legendOffset: 50,
          legendPosition: "middle",
        }}
        axisBottom={{
          tickValues: "every week",
          tickSize: 10,
          tickRotation: 0,
          tickPadding: 10,
          format: "%m-%d-%y",
          orient: "bottom",
          legend: "",
          legendOffset: 45,
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
          textColor: "slategrey",
        }}
        colors={lightMode ? ["skyblue"] : ["orange"]}
        legends={[
          {
            itemTextColor: "slategrey",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 60,
            translateY: 75,
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
    </div>
  );
}

export default Holders;
