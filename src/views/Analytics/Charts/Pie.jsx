import { ResponsivePie } from "@nivo/pie";
function Pie({ data }) {
  return (
    <ResponsivePie
      data={data}
      valueFormat=">-.2%"
      sortByValue={true}
      margin={{ top: 10, right: 100, bottom: 80, left: 100 }}
      innerRadius={0.5}
      padAngle={0.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "red_yellow_blue" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={12}
      arcLinkLabelsTextColor="white"
      arcLinkLabelsStraightLength={100}
      arcLinkLabelsThickness={10}
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
