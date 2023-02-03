import React from "react";
import { Card } from "@mui/material";

import { ProgramOverviewHeader } from "./ProgramOverviewHeader";
import { ProgramOverviewGrid } from "../ProgramOverviewGrid/ProgramOverviewGrid";

import "./ProgramOverview.css";

export const ProgramOverviewCard = () => {
  return (
    <Card className="program-overview">
      <ProgramOverviewHeader />
      <ProgramOverviewGrid />
    </Card>
  );
};
