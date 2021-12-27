import React from "react";
import preloadAll from "jest-next-dynamic";
import { render, screen } from "@testing-library/react";
import TopArtists from "./TopArtists";

beforeAll(async () => {
  await preloadAll();
});

test("should render", () => {
  const { container } = render(
    <TopArtists
      image="https://lastfm.freetls.fastly.net/i/u/174s/addee1d378532efe8699f28bc2913fb7.png"
      name="Kanye West"
      listeners={14492434}
      playCount={123123}
    />
  );
  expect(container.querySelector(".container")).toBeInTheDocument();
});

test("should have container class", () => {
  const { container } = render(
    <TopArtists
      image="https://lastfm.freetls.fastly.net/i/u/174s/addee1d378532efe8699f28bc2913fb7.png"
      name="Kanye West"
      listeners={14492434}
      playCount={123123}
    />
  );
  expect(container.firstChild).toHaveClass("container");
});
