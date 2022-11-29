import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import { useEffect } from "react";

function Pie({ data, lightMode }) {
  return (
    <div className="relative right-16 h-[80vh] w-[45vw]">
      <ResponsivePie
        data={data}
        valueFormat=">-.1%"
        sortByValue={true}
        margin={{ top: 50, right: 150, bottom: 50, left: 50 }}
        innerRadius={0.5}
        padAngle={0.25}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={lightMode ? { scheme: "blues" } : { scheme: "orange_red" }}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        arcLinkLabelsSkipAngle={20}
        arcLinkLabelsTextColor="slategrey"
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsDiagonalLength={20}
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
