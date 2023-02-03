import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ProgramOverviewSection } from "../ProgramOverviewSection/ProgramOverviewSection";

export const ProgramOverviewGrid = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <ProgramOverviewSection />
        </Grid>
      </Box>
    </Container>
  );
};
