import React from "react";
import TopArtistsDetail from "../../components/TopArtistsDetail";

import styles from "./TopArtistsDetailContainer.module.scss";

function TopArtistsDetailContainer({ topAlbums, topTracks }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        {topAlbums?.album?.map((item, i) => {
          return (
            <TopArtistsDetail
              artistName={item.artist.name}
              name={item.name}
              image={item.image}
              playCount={item.playcount}
              key={i}
            />
          );
        })}
      </div>
      <div className={styles.rightCol}>
        {topTracks?.track?.map((item, i) => {
          return (
            <TopArtistsDetail
              artistName={item.artist.name}
              name={item.name}
              image={item.image}
              playCount={item.playcount}
              listeners={item.listeners}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopArtistsDetailContainer;
