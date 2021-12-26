import React from "react";
import Link from "next/link";
import styles from "./TopArtists.module.scss";

function TopArtists({ image, name, listeners, playCount }) {
  return (
    <Link href="/artist-detail" passHref>
      <div className={styles.container}>
        <img src={image[2]["#text"]} alt="" />
        <p>Artist: {name}</p>
        <div>
          <p>Listeners: {listeners}</p>
          <p>Playcound: {playCount}</p>
        </div>
      </div>
    </Link>
  );
}

export default TopArtists;
