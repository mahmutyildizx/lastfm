import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./TopArtists.module.scss";

function TopArtists({ image, name, listeners, playCount, darkTheme }) {
  return (
    <Link href={`/artist-detail/${name}`} data-testid="topArtists" passHref>
      <div className={cn(styles.container, { [styles.darkTheme]: darkTheme })}>
        <img src={image[2]["#text"]} alt={name} />
        <span>Artist: {name}</span>
        <div>
          <span>Listeners: {listeners}</span>
          <span>Playcount: {playCount}</span>
        </div>
      </div>
    </Link>
  );
}

export default TopArtists;
