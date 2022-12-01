import React from "react";
import { render, screen } from "@testing-library/react";
import AppTitle from "../components/AppTitle";

test("renders app title", () => {
  render(<AppTitle />);
  const title = screen.getByTestId("AppTitle");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toEqual("Amazing Todo List");
});
