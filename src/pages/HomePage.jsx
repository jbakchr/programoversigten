import React from "react";
import { Container } from "@mui/material";

import { ProgramOverviewCard } from "../components/ProgramOverviewCard/ProgramOverviewCard";

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <ProgramOverviewCard />
    </Container>
  );
};
