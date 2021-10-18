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
            action: () => {
              console.log("Call Action for Something #1");
            },
          },
          {
            title: "Something #2 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #2");
            },
          },
          {
            title: "Something #3 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #3");
            },
          },
          {
            title: "Something #4 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #4");
            },
          },
          {
            title: "Something #5 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #5");
            },
          },
          {
            title: "Something #6 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #6");
            },
          },
          {
            title: "Something #7 (" + value + ")",
            action: () => {
              console.log("Call Action for Something #7");
            },
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
    <SpotlightSearchProvider
      config={{
        onSearch: request,
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
