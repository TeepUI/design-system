import { Promise as CancelablePromise, config } from "bluebird";
import { SearchResult } from "SpotlightSearch/hooks/typings";

config({ cancellation: true });

function spotlightSearchRequest(value: string) {
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

export { spotlightSearchRequest };
