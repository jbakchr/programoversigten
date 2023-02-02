import React from "react";
import { Container, Box, Grid } from "@mui/material";

export const ProgramOverviewGrid = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid style={{ textAlign: "center" }} xs={1}>
            KL.
          </Grid>
          <Grid xs={1}>1980</Grid>
          <Grid xs={1}>:</Grid>
          <Grid style={{ textAlign: "center" }} xs={9}>
            HENKOGT DOVENDIDRIK SLAGTER SLAGTER ETC.
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
