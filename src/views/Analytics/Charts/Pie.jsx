import { ResponsivePie } from "@nivo/pie";
function Pie({ data }) {
  return (
    <ResponsivePie
      data={data}
      valueFormat=">-.2%"
      sortByValue={true}
      margin={{ top: 50, right: 200, bottom: 50, left: 100 }}
      innerRadius={0.5}
      padAngle={0.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "red_yellow_blue" }}
      borderWidth={2}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={15}
      arcLinkLabelsTextColor="white"
      arcLinkLabelsStraightLength={100}
      arcLinkLabelsDiagonalLength={20}
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={12}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 10]],
      }}
      motionConfig="molasses"
      theme={{
        fontSize: 12,
      }}
    />
  );
}

export default Pie;
