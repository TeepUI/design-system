import React from "react";
import { Header } from "../Header";

export function Default() {
  return (
    <Header>
      <Header.Item>Item</Header.Item>
      <Header.Item full>Item</Header.Item>
      <Header.Item>Item</Header.Item>
    </Header>
  );
}

export default {
  title: "Components/Header",
  component: Header,
};
