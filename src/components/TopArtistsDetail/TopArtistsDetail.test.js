import React from "react";
import preloadAll from "jest-next-dynamic";
import { render, screen } from "@testing-library/react";
import TopArtistsDetail from "./TopArtistsDetail";

beforeAll(async () => {
  await preloadAll();
});

test("should render", () => {
  const { container } = render(
    <TopArtistsDetail
      artistName="Kanye West"
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
    <TopArtistsDetail
      artistName="Kanye West"
      image="https://lastfm.freetls.fastly.net/i/u/174s/addee1d378532efe8699f28bc2913fb7.png"
      name="Kanye West"
      listeners={14492434}
      playCount={123123}
    />
  );
  expect(container.firstChild).toHaveClass("container");
});

test("should render with artist name", () => {
  render(
    <TopArtistsDetail
      artistName="Kanye West"
      image="https://lastfm.freetls.fastly.net/i/u/174s/addee1d378532efe8699f28bc2913fb7.png"
      name="Graduation"
      listeners={14492434}
      playCount={123123}
    />
  );
  expect(screen.getByText("Kanye West")).toBeInTheDocument();
});

test("should render with name", () => {
  render(
    <TopArtistsDetail
      artistName="Kanye West"
      image="https://lastfm.freetls.fastly.net/i/u/174s/addee1d378532efe8699f28bc2913fb7.png"
      name="Graduation"
      listeners={14492434}
      playCount={123123}
    />
  );
  expect(screen.getByText("Graduation")).toBeInTheDocument();
});

