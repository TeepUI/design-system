import {
  SpotlightSearchProvider,
  useSpotlightSearchState,
} from "../SpotlightSearch";
import React from "react";
import { SearchResult } from "SpotlightSearch/hooks/typings";
import { Promise as CancelablePromise, config } from "bluebird";

config({ cancellation: true });

function Main() {
  const state = useSpotlightSearchState();

  return (
    <div>
      <span>Press Cmd+P to open Spotlght Search</span>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

function request(value: string) {
  return new CancelablePromise<SearchResult[]>((res, rej, onCancel) => {
    let isAborted = false;

    setTimeout(() => {
      if (isAborted) {
        return;
      }
      if (value === "fuck") {
        rej();
      } else if (value === "") {
        res([]);
      } else {
        res([
          {
            title: "Something #1 (" + value + ")",
          },
          {
            title: "Something #2 (" + value + ")",
          },
          {
            title: "Something #3 (" + value + ")",
          },
          {
            title: "Something #4 (" + value + ")",
          },
        ]);
      }
    }, 2000);

    if (onCancel) {
      onCancel(() => {
        isAborted = true;
        rej("Aborted");
      });
    }
  });
}

export function Default() {
  return (
    <SpotlightSearchProvider config={{ onSearch: request }}>
      <Main />
    </SpotlightSearchProvider>
  );
}

export default {
  title: "Components/Spotlight Search",
};
