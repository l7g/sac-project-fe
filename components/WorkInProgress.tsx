"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { IWorkSliderBtns } from "@/lib/utils";

const WorkInProgress: React.FC<IWorkSliderBtns> = ({ value }) => {
  return (
    <div>
      <Progress value={value} />
    </div>
  );
};

export default WorkInProgress;
