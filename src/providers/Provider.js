import React, { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { dummyMachine } from "../machines/dummyMachine"

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const dummyService = useInterpret(dummyMachine, { devTools: true });

  return (
    <GlobalStateContext.Provider value={{ dummyService }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
