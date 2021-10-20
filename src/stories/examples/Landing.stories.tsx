import React from "react";
import { SpotlightSearchProvider } from "../../SpotlightSearch";
import { Header } from "../../Header";
import { Button } from "../../Button";
import { Card } from "../../Card";
import { spotlightSearchRequest } from "../../utils/spotlight-utils";
import { css, styled } from "../../themes";

export function Default() {
  return (
    <SpotlightSearchProvider
      config={{
        onSearch: spotlightSearchRequest,
        onSelect(selectedResult) {
          if (selectedResult.action) {
            selectedResult.action();
          }
        },
      }}
    >
      <Header>
        <Header.Item>Pavel Keyzik</Header.Item>
        <Header.Item full />
        <Header.Item>Press Cmd+P to Search</Header.Item>
      </Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: 400,
        }}
      >
        <h2>Pavel Keyzik's Personal Blog</h2>
        <p>This blog is just a story about my experience in web development</p>
        <Button>Action Item</Button>
      </div>
      <main>
        <CardsGrid>
          <Card>
            <Card.Image src="https://blog.pavelkeyzik.com/_next/image?url=%2Fassets%2Fblog%2Fusing-primer-design-system%2Fcover.jpeg&w=1920&q=75" />
            <Card.Title>
              How I feel about using GitHub's Design System (aka Primer)
            </Card.Title>
            <Card.Text>
              A short story about my experience of using Primer
            </Card.Text>
            <Card.Date dateTime="2021-08-19">August 19, 2021</Card.Date>
          </Card>
          <Card>
            <Card.Image src="https://blog.pavelkeyzik.com/_next/image?url=%2Fassets%2Fblog%2Fgenerate-types-from-swagger%2Fcover.jpg&w=1920&q=75" />
            <Card.Title>
              Generate TypeScript types from Swagger (OpenAPI 3)
            </Card.Title>
            <Card.Text>
              In this article, I'd like to share some code that helped me a lot
              to work with an API that had been changed often
            </Card.Text>
            <Card.Date dateTime="2020-08-27">August 27, 2020</Card.Date>
          </Card>
        </CardsGrid>
      </main>
    </SpotlightSearchProvider>
  );
}

const CardsGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.tokens.space[5]};
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.tokens.space[5]} 0;
    max-width: 900px;
    margin: 0 auto;
  `
);

export default {
  title: "Examples/Landing",
};