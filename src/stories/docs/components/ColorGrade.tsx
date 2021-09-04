import invert from "invert-color";
import React from "react";
import { styled, css } from "../../../../src/themes";
import { Tokens } from "themes/tokens";

type ColorGradeGridProps = {
  tokens: Tokens;
};

type ColorGradeProps = {
  name: string;
  color: string | { [key: string]: string };
};

function ColorGradeGrid(props: ColorGradeGridProps) {
  const colors = props.tokens.colors;

  return (
    <ColorGradeGridRoot>
      {Object.keys(colors).map((key) => {
        return (
          <ColorGrade
            name={key}
            color={props.tokens.colors[key as keyof typeof colors]}
          />
        );
      })}
    </ColorGradeGridRoot>
  );
}

function ColorGrade(props: ColorGradeProps) {
  const color = props.color;

  if (typeof color === "string") {
    const localColor = color;
    const invertedColor = invert(localColor, true);

    return (
      <div>
        <b>{props.name}</b>
        <Block
          style={{
            background: localColor,
            color: invertedColor,
          }}
        >
          {localColor}
        </Block>
      </div>
    );
  }

  return (
    <div>
      <b>{props.name}</b>
      {Object.keys(color).map((colorKey) => {
        const localColor = color[colorKey];
        const invertedColor = invert(localColor, true);

        return (
          <Block
            key={colorKey}
            style={{
              background: localColor,
              color: invertedColor,
            }}
          >
            <span>{colorKey}</span>
            {localColor}
          </Block>
        );
      })}
    </div>
  );
}

const Block = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.tokens.space[2]} ${theme.tokens.space[3]};
  `
);

const ColorGradeGridRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

export { ColorGradeGrid };
