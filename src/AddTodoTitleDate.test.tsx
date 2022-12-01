import React from "react";
import { render, screen } from "@testing-library/react";
import AddTodoTitleDate from "./components/AddTodoTitleDate";
import moment from "moment";

test("renders Add todo title date", () => {
  render(<AddTodoTitleDate />);
  const dayOfWeek = screen.getByTestId("dayOfWeek");
  const monthAndYear = screen.getByTitle("monthAndYear");

  expect(dayOfWeek).toBeInTheDocument();
  expect(dayOfWeek.textContent).toEqual(
    `${moment().format("dddd")}, ${moment().format("Do")}`
  );
  expect(monthAndYear).toBeInTheDocument();
  expect(monthAndYear.textContent).toEqual(moment().format("MMMM YYYY"));
});
