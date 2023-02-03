import React from "react";
import { Container } from "@mui/material";

import { ProgramOverviewCard } from "../components/ProgramOverviewCard/ProgramOverviewCard";
import { SupportSection } from "../components/SupportSection/SupportSection";

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <ProgramOverviewCard />
      <SupportSection />
    </Container>
  );
};
