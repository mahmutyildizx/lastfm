import React from "react";
import cn from "classnames";

import styles from "./TopArtistsDetail.module.scss";

function TopArtistsDetail({
  artistName,
  name,
  image,
  playCount,
  listeners,
  darkTheme,
}) {
  return (
    <div className={cn(styles.container, { [styles.darkTheme]: darkTheme })}>
      <img src={image?.[2]["#text"]} alt={name} />
      <div className={styles.leftCol}>
        <span>{artistName}</span>
        <span>{name}</span>
      </div>
      <div className={styles.rightCol}>
        <span>{playCount} play</span>
        {listeners ? <span>{listeners} listeners</span> : null}
      </div>
    </div>
  );
}

export default TopArtistsDetail;
