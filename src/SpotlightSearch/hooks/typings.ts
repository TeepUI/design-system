export type SearchResult = {
  title: string;
};

export type SpotlightSearchStateType = {
  status: "idle" | "loading" | "error" | "resolved";
  visible: boolean;
  searchValue: string;
  searchResults: SearchResult[];
};
