import { createContext, useContext, useState } from "react";

export const LoginContext = createContext({});

// eslint-disable-next-line react/prop-types
export function LoginContextProvider({ children }) {
  const [loginTopics, setLoginTopics] = useState();

  return (
    <LoginContext.Provider value={{ loginTopics, setLoginTopics }}>
      {children}
    </LoginContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("ERROOOOOOR en el contexto");
  }
  return context;
};
