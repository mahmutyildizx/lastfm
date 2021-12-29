import React, { useRef } from "react";
import { useInfiniteQuery } from "react-query";
import cn from "classnames";
import TopArtistsContainer from "../src/containers/TopArtistsContainer/TopArtistsContainer";
import useIntersectionObserver from "../src/hooks/useIntersectionObserver";
import { fetchArtists } from "../utils/apiHelpers";

import styles from "../styles/Home.module.scss";

function Home({ darkTheme, handleTheme }) {
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("topArtists", fetchArtists, {
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  const loadMoreButtonRef = useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });
  const handleFetchNewPage = isFetchingNextPage
    ? "Loading more..."
    : hasNextPage
    ? "Load Newer"
    : "Nothing more to load";

  return (
    status === "success" && (
      <div className={cn(styles.container, { [styles.darkTheme]: darkTheme })}>
        <TopArtistsContainer
          data={data}
          handleTheme={handleTheme}
          darkTheme={darkTheme}
        />
        <button
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {handleFetchNewPage}
        </button>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
    )
  );
}

export default Home;
