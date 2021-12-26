import React, { useState, useEffect } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import TopArtistsContainer from "../src/containers/TopArtistsContainer/TopArtistsContainer";
import styles from "../styles/Home.module.scss";

function Home() {
  const { isLoading, error, data } = useQuery("topArtists", () =>
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a816dd8491b3e9b4213779150d556f5a&limit=10&format=json`
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;
  console.log("h", data);
  return (
    <div className={styles.container}>
      <TopArtistsContainer data={data} />
    </div>
  );
}

export default Home;
