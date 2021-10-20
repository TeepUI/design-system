import React from "react";
import { css, styled } from "../themes";
import { useFormControlState } from "./use-form-control";

type AdditionalInputProps = {
  hasError?: boolean;
};

const InputBase = styled.input<AdditionalInputProps>(
  ({ theme, hasError }) => css`
    display: flex;
    border: 2px solid ${theme.input.borderColor};
    border-radius: ${theme.tokens.corners[2]};
    padding: 0 ${theme.tokens.space[2]};
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

function Input(
  props: React.ComponentPropsWithoutRef<"input"> & AdditionalInputProps
) {
  const state = useFormControlState();

  return <InputBase hasError={state.errorMessage ? true : false} {...props} />;
}

export { Input };
