import React, { useState } from "react";
import { BsImage } from "react-icons/bs";

import { css, styled } from "./themes";

const CardContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    border-radius: ${theme.tokens.corners[1]};

    :focus {
      outline-offset: 8px;
    }
  `
);

const Title = styled.h3(
  ({ theme }) => css`
    font-size: 1.5em;
    margin: ${theme.tokens.space[3]} 0 0;
    color: ${theme.card.titleColor};
    cursor: pointer;
    transition: color 0.2s;

    :hover {
      color: ${theme.card.titleHoverColor};
    }
  `
);

const Text = styled.p(
  ({ theme }) => css`
    margin: ${theme.tokens.space[2]} 0 0;
    color: ${theme.card.textColor};
  `
);

const Date = styled.time(
  ({ theme }) => css`
    font-size: 0.8em;
    margin: ${theme.tokens.space[2]} 0 0;
    color: ${theme.card.dateColor};
  `
);

function Image(props: React.ComponentPropsWithRef<"img">) {
  const [error, setError] = useState(false);

  function handleError() {
    setError(true);
  }

  return (
    <ImageContainer>
      {error ? <NoImageIcon /> : <img {...props} onError={handleError} />}
    </ImageContainer>
  );
}

const ImageContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: ${theme.tokens.corners[4]};
    background: ${theme.card.imageBackground};
    color: ${theme.card.noImageIconColor};
    cursor: pointer;

    :hover img {
      transform: scale(1.1);
    }

    ::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s;
    }
  `
);

const NoImageIcon = styled(BsImage)`
  width: 30%;
  height: 30%;
`;

const Card = Object.assign(CardContainer, {
  Title,
  Image,
  Text,
  Date,
});

Card.defaultProps = {
  tabIndex: 0,
};

export { Card };
