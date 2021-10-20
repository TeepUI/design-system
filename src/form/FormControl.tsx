import React, { PropsWithChildren } from "react";
import { styled, css } from "../themes";
import { FormControlProvider, useFormControlState } from "./use-form-control";

type FormControlProps = {
  label?: string;
  errorMessage?: string;
};

function FormControlWithoutProvider(props: PropsWithChildren<unknown>) {
  const formControlState = useFormControlState();

  return (
    <label style={{ display: "flex", flexDirection: "column" }}>
      {formControlState.label ? (
        <Label hasError={formControlState.errorMessage ? true : false}>
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

const Label = styled.span<{ hasError?: boolean }>(
  ({ theme, hasError }) => css`
    margin-bottom: ${theme.tokens.space[1]};

    ${hasError
      ? css`
          color: ${theme.formControl.errorColor};
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
