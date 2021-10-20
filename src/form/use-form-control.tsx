import React, { createContext, PropsWithChildren } from "react";
import { useContext } from "react";

type FormControlProps = {
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
};

const initialState: FormControlProps = {
  label: "",
  errorMessage: "",
};

const FormControlStateContext = createContext<FormControlProps>(initialState);

function useFormControlState() {
  return useContext(FormControlStateContext);
}

function FormControlProvider(props: PropsWithChildren<FormControlProps>) {
  const { children, ...state } = props;

  return (
    <FormControlStateContext.Provider value={state}>
      {props.children}
    </FormControlStateContext.Provider>
  );
}

export type { FormControlProps };
export { useFormControlState, FormControlProvider };
