import React from "react";
import { Card } from "@mui/material";

import cardboard from "../../assets/background2.jpeg";

import "./ProgramOverview.css";
import { ProgramOverviewHeader } from "./ProgramOverviewHeader";

export const ProgramOverviewCard = () => {
  return (
    <Card
      className="program-overview"
      sx={{ backgroundImage: `url(${cardboard})` }}
    >
      <ProgramOverviewHeader />
      <p>blah</p>
    </Card>
  );
};
