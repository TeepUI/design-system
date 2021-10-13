import React, { useEffect, useRef, useState } from "react";
import { css, styled } from "../themes";

type SpotlightSearchProps = {
  visible?: boolean;
  onClose?: () => void;
};

function SpotlightSearch(props: SpotlightSearchProps) {
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

  if (!props.visible) {
    return null;
  }

  return (
    <Root>
      <Backdrop onClick={props.onClose} />
      <Content>
        <SearchContainer>
          <SearchIcon>🔦</SearchIcon>
          <SearchInput
            ref={ref}
            value={value}
            onChange={changeInputValue}
            autoFocus
            placeholder="Search..."
          />
          {value.length > 0 ? (
            <ClearInputIcon onClick={clearInputValue}>🅧</ClearInputIcon>
          ) : null}
        </SearchContainer>
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
    width: 48px;
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

export { SpotlightSearch };
