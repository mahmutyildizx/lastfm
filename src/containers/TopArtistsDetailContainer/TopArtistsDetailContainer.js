import React from "react";
import cn from "classnames";
import TopArtistsDetail from "../../components/TopArtistsDetail";

import styles from "./TopArtistsDetailContainer.module.scss";

function TopArtistsDetailContainer({ topAlbums, topTracks, darkTheme }) {
  return (
    <>
      <div className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
        <img src={topTracks?.track[0]?.image?.[2]["#text"]} alt="" />
        <span>{topAlbums?.album[0]?.artist?.name}</span>
      </div>
      <div className={cn(styles.container, { [styles.darkTheme]: darkTheme })}>
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
                darkTheme={darkTheme}
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
                darkTheme={darkTheme}
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
