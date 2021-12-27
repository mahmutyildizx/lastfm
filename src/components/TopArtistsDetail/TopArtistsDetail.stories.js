import React from "react";

import TopArtistsDetail from "./TopArtistsDetail";

export default {
  title: "Components/TopArtistsDetail",
  component: TopArtistsDetail,
};

const Template = (args) => <TopArtistsDetail {...args} />;

export const TopAlbums = Template.bind({});

TopAlbums.args = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
  artistName: "Cher",
  name: "Graduation",
  playCount: 2123231,
};

export const TopTracks = Template.bind({});
TopTracks.args = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
  artistName: "Cher",
  name: "Graduation",
  listeners: 13123123,
  playCount: 2123231,
};
