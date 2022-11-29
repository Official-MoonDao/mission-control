import { ResponsivePie } from "@nivo/pie";
function Pie({ data }) {
  console.log(data);
  return (
    <div className="h-[80vh] w-[80vw]">
      <ResponsivePie
        data={data}
        valueFormat=">-.1%"
        sortByValue={true}
        margin={{ top: 50, right: 150, bottom: 50, left: 50 }}
        innerRadius={0.5}
        padAngle={0.25}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "red_yellow_blue" }}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        arcLinkLabelsSkipAngle={20}
        arcLinkLabelsTextColor="slategrey"
        arcLinkLabelsStraightLength={20}
        arcLinkLabelsDiagonalLength={25}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 10]],
        }}
        motionConfig="molasses"
        theme={{
          fontSize: 14,
        }}
      />
    </div>
  );
}

export default Pie;
