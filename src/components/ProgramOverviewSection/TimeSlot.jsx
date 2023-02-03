import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { TextField } from "@mui/material";

export const TimeSlot = ({ timeSlot }) => {
  return (
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
        value={timeSlot}
      />
      <p style={{ marginLeft: "5px", fontWeight: "bold" }}>:</p>
    </Grid>
  );
};