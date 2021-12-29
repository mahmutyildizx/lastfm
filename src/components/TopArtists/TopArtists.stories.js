import React from "react";

import TopArtists from "./TopArtists";

export default {
  title: "Components/TopArtists",
  component: TopArtists,
};

const Template = (args) => <TopArtists {...args} />;

export const TopArtist = Template.bind({});

TopArtist.args = {
  image: "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
  name: "Cher",
  listeners: 13123123,
  playCount: 2123231,
};
