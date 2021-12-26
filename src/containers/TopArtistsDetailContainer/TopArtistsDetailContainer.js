import React from "react";
import TopArtistsDetail from "../../components/TopArtistsDetail";

import styles from "./TopArtistsDetailContainer.module.scss";

function TopArtistsDetailContainer({ topAlbums, topTracks }) {
  return (
    <>
      <div className={styles.header}>
        <img src={topTracks?.track[0]?.image?.[2]["#text"]} alt="" />
        <span>{topAlbums?.album[0]?.artist?.name}</span>
      </div>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2>Top Albums</h2>
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
          <h2>Top Tracks</h2>

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
    </>
  );
}

export default TopArtistsDetailContainer;
