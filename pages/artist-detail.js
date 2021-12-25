import React, { useState, useEffect } from "react";
import TopArtistsDetailContainer from "../src/containers/TopArtistsDetailContainer/TopArtistsDetailContainer";

import axios from 'axios';
import styles from "../styles/Home.module.css";

// const baseURL =
//   "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=ada467362ba6df6e5df6be9a545e6165&=&limit=10&format=json";

export default function Home() {
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;
  // console.log("post", post);
  return <div className={styles.container}>
    <TopArtistsDetailContainer />
  </div>;
}
