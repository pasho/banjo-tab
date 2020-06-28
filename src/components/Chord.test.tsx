import { render, waitForElement, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Chord from "./Chord";
import React from "react";

test("simple", async () => {
  render(
    <svg>
      <Chord chord="G" noteX={0} staveY={0} width={20} />
    </svg>
  );

  const text = await waitForElement(() => screen.getByText("G"));

  expect(text).toHaveTextContent("G");
});
