import { useState } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ProgramOverviewSection } from "../ProgramOverviewSection/ProgramOverviewSection";

export const ProgramOverviewGrid = () => {
  const [sections, setSections] = useState([
    { id: 1, timeSlot: "18:30", title: "Din mor" },
  ]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          {sections.map((section) => {
            return (
              <ProgramOverviewSection key={section.id} section={section} />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
