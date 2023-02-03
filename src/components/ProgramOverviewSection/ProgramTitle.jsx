import React from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ProgramTitle = ({ id, title, setTitle }) => {
  return (
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
        value={title}
        onChange={(e) => setTitle(id, e.target.value)}
      />
    </Grid>
  );
};
