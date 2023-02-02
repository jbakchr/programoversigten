import React from "react";
import { Card } from "@mui/material";

import cardboard from "../../assets/background2.jpeg";

import "./ProgramOverview.css";

export const ProgramOverviewCard = () => {
  return (
    <Card
      className="program-overview"
      sx={{ backgroundImage: `url(${cardboard})` }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "50px", fontSize: "5vw" }}
      >
        Programoversigt
      </h1>
      <p>blah</p>
    </Card>
  );
};
