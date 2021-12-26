import React, { useState, useEffect } from "react";
import TopArtistsDetailContainer from "../src/containers/TopArtistsDetailContainer/TopArtistsDetailContainer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopArtistsDetailContainer />
    </div>
  );
}
