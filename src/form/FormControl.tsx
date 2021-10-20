import React, { PropsWithChildren } from "react";
import { styled, css } from "../themes";
import {
  FormControlProps,
  FormControlProvider,
  useFormControlState,
} from "./use-form-control";

function FormControlWithoutProvider(props: PropsWithChildren<unknown>) {
  const formControlState = useFormControlState();

  return (
    <label style={{ display: "flex", flexDirection: "column" }}>
      {formControlState.label ? (
        <Label
          hasError={formControlState.errorMessage ? true : false}
          disabled={formControlState.disabled}
        >
          {formControlState.label}
        </Label>
      ) : null}
      {props.children}
      {formControlState.errorMessage ? (
        <ErrorMessage>{formControlState.errorMessage}</ErrorMessage>
      ) : null}
    </label>
  );
}

function FormControl(props: PropsWithChildren<FormControlProps>) {
  const { children, ...rest } = props;

  return (
    <FormControlProvider {...rest}>
      <FormControlWithoutProvider>{children}</FormControlWithoutProvider>
    </FormControlProvider>
  );
}

const Label = styled.span<{ hasError?: boolean; disabled?: boolean }>(
  ({ theme, disabled, hasError }) => css`
    margin-bottom: ${theme.tokens.space[1]};

    ${hasError
      ? css`
          color: ${theme.formControl.errorColor};
        `
      : null}

    ${disabled
      ? css`
          color: ${theme.formControl.labelDisabledColor};
        `
      : null}
  `
);

const ErrorMessage = styled.span(
  ({ theme }) => css`
    color: ${theme.formControl.errorColor};
  `
);

export { FormControl };
