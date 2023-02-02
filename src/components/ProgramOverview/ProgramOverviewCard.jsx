import React from "react";
import { Card } from "@mui/material";

import { ProgramOverviewHeader } from "./ProgramOverviewHeader";

import "./ProgramOverview.css";

export const ProgramOverviewCard = () => {
  return (
    <Card className="program-overview">
      <ProgramOverviewHeader />
      <p>blah</p>
    </Card>
  );
};
