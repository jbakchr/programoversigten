import React from "react";
import { Container, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ProgramOverviewGrid = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid
            xs={4}
            style={{ display: "flex", alignItems: "center", fontSize: "35px" }}
          >
            <p style={{ marginRight: "8px" }}>KL.</p>
            <TextField
              variant="standard"
              placeholder="12 sek og 4 år"
              InputProps={{
                style: {
                  fontFamily: "Covered By Your Grace",
                  fontSize: "35px",
                  width: "60px",
                },
              }}
            />
            <p style={{ marginLeft: "5px" }}>:</p>
          </Grid>
          <Grid xs={8}>blah blah</Grid>
        </Grid>
      </Box>
    </Container>
  );
};
