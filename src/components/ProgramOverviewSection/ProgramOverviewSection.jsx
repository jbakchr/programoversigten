import React from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ProgramOverviewSection = () => {
  return (
    <>
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
    </>
  );
};
