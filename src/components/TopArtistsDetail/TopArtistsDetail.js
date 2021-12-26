import React from "react";
import styles from "./TopArtistsDetail.module.scss";

function TopArtistsDetail({ artistName, name, image, playCount, listeners }) {
  return (
    <div className={styles.container}>
      <img src={image?.[2]["#text"]} alt="" />
      <div>
        <span>{artistName}</span>
        <span>{name}</span>
      </div>
      <div>
        <span>{playCount} play</span>
        {listeners ? <span>{listeners} listeners</span> : null}
      </div>
    </div>
  );
}

export default TopArtistsDetail;
