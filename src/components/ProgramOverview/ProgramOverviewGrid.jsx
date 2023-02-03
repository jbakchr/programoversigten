import React from "react";
import { Container, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ProgramOverviewGrid = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "35px",
              justifyContent: "top",
            }}
          >
            <p style={{ marginRight: "8px" }}>KL.</p>
            <TextField
              variant="standard"
              placeholder="?"
              InputProps={{
                style: {
                  fontFamily: "Covered By Your Grace",
                  fontSize: "35px",
                  fontWeight: "bold",
                  width: "70px",
                },
              }}
              inputProps={{
                style: { textTransform: "uppercase" },
              }}
            />
            <p style={{ marginLeft: "5px", fontWeight: "bold" }}>:</p>
          </Grid>
          <Grid xs={9}>
            <TextField
              variant="standard"
              fullWidth
              placeholder="???"
              multiline
              InputProps={{
                style: {
                  fontFamily: "Covered By Your Grace",
                  fontSize: "35px",
                },
              }}
              inputProps={{
                style: { textTransform: "uppercase" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
