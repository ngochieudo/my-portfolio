
import React from "react";
import { UITimeline } from "./ui/UITimeline";
import { timelineData } from "../data";

const Timeline = () => {
  return (
    <>
      
      <div className="relative w-full overflow-clip">
      <UITimeline data={timelineData} />
    </div>
    </>
  );
};

export default Timeline;
