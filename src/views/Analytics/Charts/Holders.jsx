// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Holders(props) {
  return (
    <div className="w-1/2">
      <ResponsiveLine
        data={[
          {
            id: "japan",
            color: "hsl(79, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 27,
              },
              {
                x: "helicopter",
                y: 57,
              },
              {
                x: "boat",
                y: 16,
              },
              {
                x: "train",
                y: 145,
              },
              {
                x: "subway",
                y: 105,
              },
              {
                x: "bus",
                y: 294,
              },
              {
                x: "car",
                y: 129,
              },
              {
                x: "moto",
                y: 256,
              },
              {
                x: "bicycle",
                y: 176,
              },
              {
                x: "horse",
                y: 288,
              },
              {
                x: "skateboard",
                y: 75,
              },
              {
                x: "others",
                y: 38,
              },
            ],
          },
          {
            id: "france",
            color: "hsl(214, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 106,
              },
              {
                x: "helicopter",
                y: 180,
              },
              {
                x: "boat",
                y: 180,
              },
              {
                x: "train",
                y: 108,
              },
              {
                x: "subway",
                y: 212,
              },
              {
                x: "bus",
                y: 105,
              },
              {
                x: "car",
                y: 247,
              },
              {
                x: "moto",
                y: 222,
              },
              {
                x: "bicycle",
                y: 55,
              },
              {
                x: "horse",
                y: 9,
              },
              {
                x: "skateboard",
                y: 12,
              },
              {
                x: "others",
                y: 6,
              },
            ],
          },
          {
            id: "us",
            color: "hsl(353, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 121,
              },
              {
                x: "helicopter",
                y: 165,
              },
              {
                x: "boat",
                y: 237,
              },
              {
                x: "train",
                y: 12,
              },
              {
                x: "subway",
                y: 224,
              },
              {
                x: "bus",
                y: 100,
              },
              {
                x: "car",
                y: 7,
              },
              {
                x: "moto",
                y: 107,
              },
              {
                x: "bicycle",
                y: 55,
              },
              {
                x: "horse",
                y: 26,
              },
              {
                x: "skateboard",
                y: 114,
              },
              {
                x: "others",
                y: 178,
              },
            ],
          },
          {
            id: "germany",
            color: "hsl(63, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 159,
              },
              {
                x: "helicopter",
                y: 19,
              },
              {
                x: "boat",
                y: 16,
              },
              {
                x: "train",
                y: 191,
              },
              {
                x: "subway",
                y: 275,
              },
              {
                x: "bus",
                y: 290,
              },
              {
                x: "car",
                y: 130,
              },
              {
                x: "moto",
                y: 49,
              },
              {
                x: "bicycle",
                y: 221,
              },
              {
                x: "horse",
                y: 61,
              },
              {
                x: "skateboard",
                y: 234,
              },
              {
                x: "others",
                y: 147,
              },
            ],
          },
          {
            id: "norway",
            color: "hsl(101, 70%, 50%)",
            data: [
              {
                x: "plane",
                y: 290,
              },
              {
                x: "helicopter",
                y: 167,
              },
              {
                x: "boat",
                y: 173,
              },
              {
                x: "train",
                y: 292,
              },
              {
                x: "subway",
                y: 170,
              },
              {
                x: "bus",
                y: 251,
              },
              {
                x: "car",
                y: 137,
              },
              {
                x: "moto",
                y: 139,
              },
              {
                x: "bicycle",
                y: 123,
              },
              {
                x: "horse",
                y: 267,
              },
              {
                x: "skateboard",
                y: 86,
              },
              {
                x: "others",
                y: 210,
              },
            ],
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
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
            itemOpacity: 0.75,
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
