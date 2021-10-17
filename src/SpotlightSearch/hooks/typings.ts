export type SearchResult = {
  title: string;
  action?: () => void;
};

export type SpotlightSearchStateType = {
  status: "idle" | "loading" | "error" | "resolved";
  visible: boolean;
  searchValue: string;
  searchResults: SearchResult[];
  selectedIndex: number;
};
