import { Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const AddTodoTitleDate = () => {
  return (
    <>
      <Typography data-testid="dayOfWeek" color={"#10069F"} fontWeight={"bold"}>
        {moment().format("dddd")},{" "}
        <span style={{ fontWeight: "normal" }}>{moment().format("Do")}</span>
      </Typography>
      <Typography title="monthAndYear" color={"#10069F"}>
        {moment().format("MMMM YYYY")}
      </Typography>
    </>
  );
};

export default AddTodoTitleDate;
