import React from "react";
import { css, styled } from "../themes";
import { useFormControlState } from "./use-form-control";

type AdditionalTextAreaProps = {
  hasError?: boolean;
};

const TextAreaBase = styled.textarea<AdditionalTextAreaProps>(
  ({ theme, hasError }) => css`
    display: flex;
    border: 1px solid ${theme.input.borderColor};
    border-radius: ${theme.tokens.corners[2]};
    padding: ${theme.tokens.space[1]} ${theme.tokens.space[2]};
    min-height: 44px;
    color: ${theme.input.valueColor};

    ::placeholder {
      color: ${theme.input.placeholderColor};
    }

    :focus {
      border-color: ${theme.input.borderFocusColor};
      outline: none;
    }

    :disabled {
      border-color: ${theme.input.borderDisabledColor};
      color: ${theme.input.valueDisabledColor};

      ::placeholder {
        color: ${theme.input.placeholderDisabledColor};
      }
    }

    ${hasError
      ? css`
          border-color: ${theme.formControl.errorColor};
        `
      : null}
  `
);

function TextArea(
  props: React.ComponentPropsWithoutRef<"textarea"> & AdditionalTextAreaProps
) {
  const state = useFormControlState();

  return (
    <TextAreaBase
      hasError={state.errorMessage ? true : false}
      disabled={state.disabled}
      {...props}
    />
  );
}

export { TextArea };
