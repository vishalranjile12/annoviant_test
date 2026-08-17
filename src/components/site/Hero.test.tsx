import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the core offer section prominently", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Our Core Offer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Clearly state what your business offers, to whom, and the main benefit they receive",
      ),
    ).toBeInTheDocument();
  });
});
