import React from "react";
import { Markdown } from "../Markdown";

export function Default() {
  return (
    <Markdown>
      <h2>Headings</h2>
      <p>
        When creating a header, all you need to do is add a <code>#</code>{" "}
        before your header or use the contextual toolbar. You can keep adding up
        to six <code>#</code> in a row to make the headers smaller.
      </p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h2>Links</h2>
      <p>
        A link to <a href="https://google.com">Google</a>
      </p>
      <h2>Inline code</h2>
      <p>
        If you want to add a quote, you just need to add a <code>{">"}</code> to
        the beginning of the line or use the contextual toolbar, and it will put
        it into the quote format.
      </p>
      <h2>Quoting</h2>
      <blockquote>
        A link to <a href="https://google.com">Google</a>
      </blockquote>
      <h2>Images</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <figure>
        <img
          src="https://source.unsplash.com/random/600x300"
          alt="Some image description"
        />
        <figcaption>Photo by ...</figcaption>
      </figure>
      <h2>Highlighting</h2>
      <mark>Highlighting text</mark> it is a long established fact that a reader
      will be distracted by the readable content of.
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
