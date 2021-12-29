import { API_KEY } from "./constants";

export const fetchArtists = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&page=${pageParam}&limit=10&format=json`
  );
  const results = await response.json();
  return {
    results,
    nextPage: pageParam + 1,
    totalPages: results.artists["@attr"].totalPages,
  };
};

export const getAlbumsUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=${API_KEY}&limit=5&format=json`;
};

export const getTopTracksUrl = (artistName) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${API_KEY}&limit=5&format=json`;
};
