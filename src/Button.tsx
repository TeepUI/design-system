import { css, styled } from "./themes";

type ButtonProps = {
  variant?: "primary" | "secondary" | "text";
};

const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: ${theme.tokens.space[3]} ${theme.tokens.space[4]};
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: ${theme.tokens.corners[4]};
    transition: background-color 0.2s, color 0.2s;

    ${variant === "primary"
      ? css`
          background: ${theme.button.primary.buttonColor};
          color: ${theme.button.primary.textColor};

          :hover {
            background: ${theme.button.primary.buttonColorHovered};
          }
        `
      : null}

    ${variant === "secondary"
      ? css`
          border: 1px solid ${theme.button.secondary.buttonColor};
          color: ${theme.button.secondary.textColor};

          :hover {
            border-color: ${theme.button.secondary.buttonColorHovered};
            color: ${theme.button.secondary.textColorHovered};
          }
        `
      : null}

    ${variant === "text"
      ? css`
          color: ${theme.button.text.color};

          :hover {
            color: ${theme.button.text.colorHovered};
          }
        `
      : null}
  `
);

Button.defaultProps = {
  variant: "primary",
};

export { Button };
