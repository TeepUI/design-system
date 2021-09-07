import React from "react";
import { Button } from "../Button";

export function Default() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

export default {
  title: "Components/Button",
  component: Button,
};
