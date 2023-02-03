import { useState } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ProgramOverviewSection } from "../ProgramOverviewSection/ProgramOverviewSection";

export const ProgramOverviewGrid = () => {
  const [sections, setSections] = useState([
    { id: 0, timeSlot: "", title: "" },
  ]);

  const setTimeSlot = (id, text) => {
    const listOfSections = [...sections];
    listOfSections[id].timeSlot = text;
    setSections(listOfSections);
  };

  const setTitle = (id, text) => {
    const listOfSections = [...sections];
    listOfSections[id].title = text;
    setSections(listOfSections);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          {sections.map((section) => {
            return (
              <ProgramOverviewSection
                key={section.id}
                section={section}
                setTimeSlot={setTimeSlot}
                setTitle={setTitle}
              />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
