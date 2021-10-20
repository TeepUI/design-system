import React from "react";
import { css, styled } from "../themes";
import { Card } from "../Card";
import { maxContentWidth } from "../utils/styles-config";

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
      <Card>
        <Card.Image src="https://blog.pavelkeyzik.com/_next/image?url=%2Fassets%2Fblog%2Fusing-primer-design-system%2Fcover.jpeg&w=1920&q=75" />
        <Card.Title>
          How I feel about using GitHub's Design System (aka Primer)
        </Card.Title>
        <Card.Text>A short story about my experience of using Primer</Card.Text>
        <Card.Date dateTime="2021-08-19">August 19, 2021</Card.Date>
      </Card>
      <Card>
        <Card.Image src="https://blog.pavelkeyzik.com/_next/image?url=%2Fassets%2Fblog%2Fgenerate-types-from-swagger%2Fcover.jpg&w=1920&q=75" />
        <Card.Title>
          Generate TypeScript types from Swagger (OpenAPI 3)
        </Card.Title>
        <Card.Text>
          In this article, I'd like to share some code that helped me a lot to
          work with an API that had been changed often
        </Card.Text>
        <Card.Date dateTime="2020-08-27">August 27, 2020</Card.Date>
      </Card>
    </CardsGrid>
  );
}

const CardsGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.tokens.space[5]};
    grid-template-columns: repeat(3, 1fr);
    ${maxContentWidth};
  `
);

export default {
  title: "Components/Card",
  component: Card,
};
