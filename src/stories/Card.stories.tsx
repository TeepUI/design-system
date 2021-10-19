import React from "react";
import { css, styled } from "../themes";
import { Card } from "../Card";

export function Default() {
  return (
    <CardsGrid>
      <Card>
        <Card.Image src="broken_source" />
        <Card.Title>
          How To Choose Best Bike For Spring In Australia?
        </Card.Title>
        <Card.Text>
          how to choose best bicycle for spring in australia shops how to choose
        </Card.Text>
        <Card.Date dateTime="2021-07-21">July 21, 2022</Card.Date>
      </Card>
      <Card>
        <Card.Image src="https://source.unsplash.com/400x400/?bycicle" />
        <Card.Title>
          How To Choose Best Bike For Spring In Australia?
        </Card.Title>
        <Card.Text>
          how to choose best bicycle for spring in australia shops how to choose
          bicycle for spring in australia shops how to choose bicycle
        </Card.Text>
        <Card.Date dateTime="2021-07-21">July 21, 2022</Card.Date>
      </Card>
      <Card>
        <Card.Image src="https://source.unsplash.com/400x400/?bike" />
        <Card.Title>
          How To Choose Best Bike For Spring In Australia?
        </Card.Title>
        <Card.Text>
          how to choose best bicycle for spring in australia shops how to choose
        </Card.Text>
        <Card.Date dateTime="2021-07-21">July 21, 2022</Card.Date>
      </Card>
    </CardsGrid>
  );
}

const CardsGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.tokens.space[5]};
    grid-template-columns: repeat(3, 1fr);
    max-width: 900px;
    margin: 0 auto;
  `
);

export default {
  title: "Components/Card",
  component: Card,
};
