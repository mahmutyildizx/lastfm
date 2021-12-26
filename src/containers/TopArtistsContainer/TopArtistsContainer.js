import React from "react";
import TopArtists from "../../components/TopArtists";

import styles from "./TopArtistsContainer.module.scss";

function TopArtistsContainer({ data }) {
  
  return (
    <div className={styles.TopArtistsContainer}>
      <h1>Top Artist List</h1>
      {data.artists.artist.map((item, index) => {
        return (
          <TopArtists
            key={index}
            image={item.image}
            name={item.name}
            listeners={item.listeners}
            playCount={item.playcount}
          />
        );
      })}
    </div>
  );
}

export default TopArtistsContainer;
