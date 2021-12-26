import React from "react";
import TopArtistsDetailContainer from "../../src/containers/TopArtistsDetailContainer";
import styles from "../../styles/Home.module.scss";

const getAlbumsUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=a816dd8491b3e9b4213779150d556f5a&limit=5&format=json`;
};

const getTopTracksUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=a816dd8491b3e9b4213779150d556f5a&limit=5&format=json`;
};

export default function Home({ albumsData, tracksData }) {
  return (
    <div className={styles.container}>
      <TopArtistsDetailContainer
        topAlbums={albumsData.topalbums}
        topTracks={tracksData.toptracks}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { artistName } = context.query;

  const [albumsRes, tracksRes] = await Promise.all([
    fetch(getAlbumsUrl(artistName)),
    fetch(getTopTracksUrl(artistName)),
  ]);
  const [albumsData, tracksData] = await Promise.all([
    albumsRes.json(),
    tracksRes.json(),
  ]);
  return { props: { albumsData, tracksData } };
}
