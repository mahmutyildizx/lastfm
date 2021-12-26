import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import TopArtistsContainer from "../src/containers/TopArtistsContainer/TopArtistsContainer";
import styles from "../styles/Home.module.scss";

function Home() {
  const fetchArtists = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a816dd8491b3e9b4213779150d556f5a&page=${pageParam}&limit=10&format=json`
    );
    const results = await response.json();
    return {
      results,
      nextPage: pageParam + 1,
      totalPages: results.artists["@attr"].totalPages,
    };
  };

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("topArtists", fetchArtists, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className={styles.container}>
      <div>
        <TopArtistsContainer data={data} />
      </div>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default Home;
