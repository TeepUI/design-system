import React from "react";
import { styled, css } from "../themes";
import { FormControl } from "../form/FormControl";
import { Input } from "../form/Input";
import { TextArea } from "../form/TextArea";

export function Default() {
  return (
    <InputGrid>
      <Input placeholder="Write Something" />
      <Input value="Some Value" />
      <Input placeholder="Disabled Placeholder" disabled />
      <Input value="Disabled Value" disabled />
      <FormControl label="File Name">
        <Input placeholder="e.g. iPhone 11 Mockup" />
      </FormControl>
      <FormControl label="Label for input" errorMessage="Something Went Wrong">
        <Input />
      </FormControl>
      <FormControl label="Label for input" errorMessage="Something Went Wrong">
        <TextArea />
      </FormControl>
      <FormControl label="Label for input">
        <TextArea />
      </FormControl>
    </InputGrid>
  );
}

const InputGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: flex-start;
    grid-gap: ${theme.tokens.space[3]};
  `
);

export default {
  title: "Components/Form",
};
