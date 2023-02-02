import React from "react";
import { Card } from "@mui/material";

import { ProgramOverviewHeader } from "./ProgramOverviewHeader";

import "./ProgramOverview.css";
import { ProgramOverviewGrid } from "./ProgramOverviewGrid";

export const ProgramOverviewCard = () => {
  return (
    <Card className="program-overview">
      <ProgramOverviewHeader />
      <ProgramOverviewGrid />
    </Card>
  );
};
