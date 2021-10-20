import React from "react";
import addons from "@storybook/addons";
import { useDarkMode } from "storybook-dark-mode";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { SpotlightSearchProvider } from "../../SpotlightSearch";
import { Header } from "../../Header";
import { Button } from "../../Button";
import { Card } from "../../Card";
import { Typography } from "../../Typography";
import { spotlightSearchRequest } from "../../utils/spotlight-utils";
import { css, styled } from "../../themes";
import { maxContentWidth } from "../../utils/styles-config";
import { FormControl } from "../../form/FormControl";
import { Input } from "../../form/Input";
import { TextArea } from "../../form/TextArea";
import { Form } from "../../form/Form";

const channel = addons.getChannel();

export function Default() {
  const dark = useDarkMode();

  function toggleDarkMode() {
    channel.emit("DARK_MODE", !dark);
  }

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
        <Header.Item>
          <Header.Logo href="#">Pavel Keyzik</Header.Logo>
        </Header.Item>
        <Header.Item full />
        <Header.Item>Press Cmd+P to Search</Header.Item>
        <Header.Item>
          <Button variant="text" onClick={toggleDarkMode}>
            {dark ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </Button>
        </Header.Item>
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
        <Typography.H2>Pavel Keyzik's Personal Blog</Typography.H2>
        <Typography.Body1>
          This blog is just a story about my experience in web development
        </Typography.Body1>
        <div style={{ display: "flex", gap: 16 }}>
          <Button>Hire me if you're GitHub</Button>
          <Button variant="secondary">About Me</Button>
        </div>
      </div>
      <main>
        <Section>
          <Typography.H2>Articles</Typography.H2>
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
                In this article, I'd like to share some code that helped me a
                lot to work with an API that had been changed often
              </Card.Text>
              <Card.Date dateTime="2020-08-27">August 27, 2020</Card.Date>
            </Card>
          </CardsGrid>
        </Section>
        <Section>
          <Typography.H2>Contact Me</Typography.H2>
          <div
            style={{
              display: "grid",
              gridGap: 40,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Form>
              <FormControl label="Full Name">
                <Input placeholder="e.g. Pavel Keyzik" />
              </FormControl>
              <FormControl label="E-Mail">
                <Input placeholder="e.g. pavel.keyzik@gmail.com" />
              </FormControl>
              <FormControl label="Your Message">
                <TextArea placeholder="Thank you..." />
              </FormControl>
              <Button style={{ justifySelf: "flex-start", marginTop: 16 }}>
                Send Message
              </Button>
            </Form>
          </div>
        </Section>
      </main>
    </SpotlightSearchProvider>
  );
}

const Section = styled.section`
  ${maxContentWidth};
`;

const CardsGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.tokens.space[5]};
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.tokens.space[5]} 0;
  `
);

export default {
  title: "Examples/Landing",
};
