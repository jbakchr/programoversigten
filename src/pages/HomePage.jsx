import React from "react";
import { Container } from "@mui/material";

import { ProgramOverviewCard } from "../components/ProgramOverview/ProgramOverviewCard";

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <ProgramOverviewCard />
    </Container>
  );
};
