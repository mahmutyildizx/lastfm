import React from "react";
import styles from "./TopArtistsDetail.module.scss";

function TopArtistsDetail({ artistName, name, image, playCount, listeners }) {
  return (
    <div className={styles.container}>
      <img src={image?.[2]["#text"]} alt="" />
      <p>{artistName}</p>
      <p>{name}</p>
      <p>{playCount}</p>
      {listeners ? <p>{listeners}</p> : null}
    </div>
  );
}

export default TopArtistsDetail;
