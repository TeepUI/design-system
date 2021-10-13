import {
  SpotlightSearchProvider,
  useSpotlightSearch,
} from "../SpotlightSearch";
import React from "react";

function Main() {
  const state = useSpotlightSearch();

  return (
    <div>
      <span>Press Cmd+P to open Spotlght Search</span>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export function Default() {
  return (
    <SpotlightSearchProvider>
      <Main />
    </SpotlightSearchProvider>
  );
}

export default {
  title: "Components/Spotlight Search",
};
