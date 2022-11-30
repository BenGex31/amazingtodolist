import { Paper, Typography } from "@mui/material";
import React from "react";

const AppTitle = () => {
  return (
    <Paper sx={{ backgroundColor: "#617BFF" }} elevation={3}>
      <Typography color={"#10069F"} align="center" variant="h1">
        Amazing Todo List
      </Typography>
    </Paper>
  );
};

export default AppTitle;
