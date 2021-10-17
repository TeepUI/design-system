import {
  SpotlightSearchProvider,
  useSpotlightSearchState,
} from "../SpotlightSearch";
import React from "react";
import { spotlightSearchRequest } from "../utils/spotlight-utils";

function Main() {
  const state = useSpotlightSearchState();

  return (
    <div>
      <span>Press Cmd+P to open Spotlght Search</span>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export function Default() {
  return (
    <SpotlightSearchProvider
      config={{
        onSearch: spotlightSearchRequest,
        onSelect(selectedResult) {
          if (selectedResult.action) {
            selectedResult.action();
          }
        },
      }}
    >
      <Main />
    </SpotlightSearchProvider>
  );
}

export default {
  title: "Components/Spotlight Search",
};
