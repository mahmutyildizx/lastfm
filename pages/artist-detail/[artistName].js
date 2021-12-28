import React from "react";
import cn from "classnames";
import TopArtistsDetailContainer from "../../src/containers/TopArtistsDetailContainer";
import styles from "../../styles/Home.module.scss";

const getAlbumsUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=a816dd8491b3e9b4213779150d556f5a&limit=5&format=json`;
};

const getTopTracksUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=a816dd8491b3e9b4213779150d556f5a&limit=5&format=json`;
};

 function ArtistDetail({ albumsData, tracksData, darkTheme }) {
  return (
    <div className={cn(styles.container, { [styles.darkTheme]: darkTheme })}>
      <TopArtistsDetailContainer
        topAlbums={albumsData.topalbums}
        topTracks={tracksData.toptracks}
        darkTheme={darkTheme}
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

export default ArtistDetail;