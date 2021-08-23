import React from "react";
import { Markdown } from "../Markdown";

export function Default() {
  return (
    <Markdown>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p>Body text</p>
      <blockquote>
        Blockquote
        <blockquote>Inner Blockquote</blockquote>
        More quote
      </blockquote>
      <p>
        This is <code>inline</code> code
      </p>
      <ul>
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </ul>
      <ol>
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
        <ol>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </ol>
    </Markdown>
  );
}

export default {
  title: "Components/Markdown",
  component: Markdown,
};
