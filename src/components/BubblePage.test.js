import React from "react";
import { render, screen, wait, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockColors } from "../helpers/getColors";
import ColorList from "./ColorList";

jest.mock("../helpers/getColors");

const mockData = {
  data: [
    {
      color: "black",
      code: { hex: "#0000" },
    },
    {
      color: "white",
      code: { hex: "#ffff" },
    },
  ],
};

test("Renders BubblePage without errors", async () => {
  mockColors.mockResolvedValueOnce({ data: [] });
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockColors.mockResolvedValueOnce(mockData);
  render(<ColorList />);

  await waitFor(() => {
    const renderedColors = screen.getAllByTestId("color");
    expect(renderedColors).toHaveLength(2);
  });
  screen.debug();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
