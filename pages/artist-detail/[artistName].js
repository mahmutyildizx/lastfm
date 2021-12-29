import React from "react";
import cn from "classnames";
import TopArtistsDetailContainer from "../../src/containers/TopArtistsDetailContainer";
import { getAlbumsUrl, getTopTracksUrl } from "../../utils/apiHelpers";
import styles from "../../styles/Home.module.scss";

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
