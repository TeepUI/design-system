import React, { createContext, PropsWithChildren } from "react";
import { useContext } from "react";

type StateType = {
  label?: string;
  errorMessage?: string;
};

const initialState: StateType = {
  label: "",
  errorMessage: "",
};

const FormControlStateContext = createContext<StateType>(initialState);

function useFormControlState() {
  return useContext(FormControlStateContext);
}

function FormControlProvider(props: PropsWithChildren<StateType>) {
  const { children, ...state } = props;

  return (
    <FormControlStateContext.Provider value={state}>
      {props.children}
    </FormControlStateContext.Provider>
  );
}

export { useFormControlState, FormControlProvider };
