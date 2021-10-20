import React from "react";
import { Typography } from "../Typography";

export function Default() {
  return (
    <div>
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.H5>Heading 5</Typography.H5>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Button>Button</Typography.Button>
      <Typography.Caption>Caption</Typography.Caption>
    </div>
  );
}

export default {
  title: "Components/Typography",
  component: Typography,
};
