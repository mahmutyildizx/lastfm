import React, { useState, useEffect } from "react";
import TopArtistsContainer from "../src/containers/TopArtistsContainer/TopArtistsContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopArtistsContainer />
    </div>
  );
}
