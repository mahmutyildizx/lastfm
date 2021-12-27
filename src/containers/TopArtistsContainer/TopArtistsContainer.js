import React from "react";
import TopArtists from "../../components/TopArtists";
import cn from "classnames";

import styles from "./TopArtistsContainer.module.scss";

function TopArtistsContainer({ data, handleTheme, darkTheme }) {
  return (
    <div className={styles.topArtistsContainer}>
      <div className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
        <h1>Top Artists List</h1>
        <button onClick={() => handleTheme()}>Switch Button</button>
      </div>

      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.artists.artist.map((item, i) => (
            <TopArtists
              image={item.image}
              name={item.name}
              listeners={item.listeners}
              playCount={item.playcount}
              darkTheme={darkTheme}
              key={i}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TopArtistsContainer;
