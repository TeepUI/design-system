import React, { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { BiSearch, BiLoaderAlt } from "react-icons/bi";
import {
  BsXCircleFill,
  BsArrowReturnLeft as PressEnterIcon,
} from "react-icons/bs";
import { debounce } from "throttle-debounce";
import { css, styled, keyframes } from "../themes";
import {
  useSpotlightSearchDispatch,
  useSpotlightSearchState,
} from "./hooks/use-spotlight-search";

type SpotlightSearchProps = {
  visible?: boolean;
  onClose?: () => void;
};

function SpotlightSearch(props: SpotlightSearchProps) {
  const state = useSpotlightSearchState();
  const dispatch = useSpotlightSearchDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  function changeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    setValue(value);
  }

  function clearInputValue() {
    setValue("");
    ref.current?.focus();
  }

  useEffect(() => {
    if (!props.visible) {
      clearInputValue();
    }
  }, [props.visible]);

  const updateSearchValueState = useMemo(
    () =>
      debounce(600, (value: string) => {
        dispatch({
          type: "CHANGE_SEARCH_VALUE",
          payload: { value },
        });
      }),
    []
  );

  useEffect(() => {
    updateSearchValueState(value);
  }, [value]);

  if (!props.visible) {
    return null;
  }

  return (
    <Root>
      <Backdrop onClick={props.onClose} />
      <Content>
        <SearchContainer>
          <SearchIcon>
            {state.status === "loading" ? (
              <BiLoaderAltIcon />
            ) : (
              <BiSearchIcon />
            )}
          </SearchIcon>
          <SearchInput
            ref={ref}
            value={value}
            onChange={changeInputValue}
            autoFocus
            placeholder="Search..."
          />
          {value.length > 0 ? (
            <ClearInputIcon onClick={clearInputValue}>
              <BsXCircleFillIcon />
            </ClearInputIcon>
          ) : null}
        </SearchContainer>
        {state.searchResults.length ? (
          <ResultsContainer>
            <ResultsSectionLabel>Search Results</ResultsSectionLabel>
            {state.searchResults.map((result, index) => {
              const isSelected = index === state.selectedIndex;

              return (
                <ResultsItem key={index} isSelected={isSelected}>
                  <ResultItemText>{result.title}</ResultItemText>
                  {isSelected ? (
                    <PressEnterLabel>
                      <span>Select</span>
                      <PressEnterIcon />
                    </PressEnterLabel>
                  ) : null}
                </ResultsItem>
              );
            })}
          </ResultsContainer>
        ) : null}
        {state.status === "error" && state.searchResults.length === 0 ? (
          <NoResultsContainer>
            <b>No Results</b>
            <span>Try different search terms</span>
          </NoResultsContainer>
        ) : null}
      </Content>
    </Root>
  );
}

const Root = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.tokens.space[3]} ${theme.tokens.space[5]};
  `
);

const Backdrop = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${theme.spotlightSearch.overlayBackground};
    z-index: 23;
  `
);

const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.spotlightSearch.modalBackground};
    color: ${theme.spotlightSearch.modalTextColor};
    border-radius: ${theme.tokens.corners[1]};
    width: 100%;
    max-width: 600px;
    z-index: 24;
  `
);

const SearchContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-height: 60px;
    padding: ${theme.tokens.space[2]} ${theme.tokens.space[2]};
  `
);

const SearchIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 48px;
`;

const ClearInputIcon = styled.button(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    background: none;
    color: ${theme.spotlightSearch.modalTextColor};
    padding: 0;
    width: 48px;
    outline: none;

    :focus > * {
      outline: 4px solid ${theme.spotlightSearch.clearIconOutlineColor};
      border-radius: 50%;
    }
  `
);

const SearchInput = styled.input(
  ({ theme }) => css`
    display: flex;
    border: none;
    background: none;
    font-family: inherit;
    font-size: 1em;
    width: 100%;
    color: ${theme.spotlightSearch.modalTextColor};
    outline: none;
  `
);

const BiSearchIcon = styled(BiSearch)`
  width: 50%;
  height: 50%;
`;

const BsXCircleFillIcon = styled(BsXCircleFill)`
  width: 40%;
  height: 40%;
`;

const ResultItemText = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PressEnterLabel = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 0.7em;
    padding: ${theme.tokens.space[1]} ${theme.tokens.space[2]};
    border-radius: ${theme.tokens.corners[1]};
    color: ${theme.spotlightSearch.labelColor};

    > *:not(:last-child) {
      margin-right: ${theme.tokens.space[2]};
    }
  `
);

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const BiLoaderAltIcon = styled(BiLoaderAlt)`
  width: 50%;
  height: 50%;
  animation: ${rotateAnimation} 0.8s infinite linear;
`;

const ResultsContainer = styled.div(
  ({ theme }) => css`
    display: grid;
    max-width: 100%;
    border-top: 1px solid ${theme.spotlightSearch.dividerColor};
    padding: ${theme.tokens.space[3]} ${theme.tokens.space[3]};
  `
);

const ResultsItem = styled.div<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.tokens.space[2]} ${theme.tokens.space[2]};
    border-radius: ${theme.tokens.corners[3]};
    overflow: hidden;

    ${isSelected &&
    css`
      background: ${theme.spotlightSearch.selectedItemBackground};
    `}

    > *:not(:last-child) {
      margin-right: ${theme.tokens.space[2]};
    }
  `
);

const NoResultsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top: 1px solid ${theme.spotlightSearch.dividerColor};
    padding: ${theme.tokens.space[3]} ${theme.tokens.space[4]};
  `
);

const ResultsSectionLabel = styled.div(
  ({ theme }) => css`
    font-size: 0.8em;
    padding: ${theme.tokens.space[1]} ${theme.tokens.space[2]};
    color: ${theme.spotlightSearch.labelColor};
  `
);

export { SpotlightSearch };
