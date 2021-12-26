import React from "react";
import TopArtists from "../../components/TopArtists";

import styles from "./TopArtistsContainer.module.scss";

function TopArtistsContainer({ data }) {
  return (
    <div className={styles.topArtistsContainer}>
      <h1>Top Artists List</h1>

      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.artists.artist.map((item, i) => (
            <TopArtists
              image={item.image}
              name={item.name}
              listeners={item.listeners}
              playCount={item.playcount}
              key={i}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TopArtistsContainer;
