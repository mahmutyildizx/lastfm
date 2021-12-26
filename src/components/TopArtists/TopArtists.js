import React from "react";
import Link from "next/link";
import styles from "./TopArtists.module.scss";

function TopArtists({ image, name, listeners, playCount }) {
  return (
    <Link href={`/artist-detail/${name}`} passHref>
      <div className={styles.container}>
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
