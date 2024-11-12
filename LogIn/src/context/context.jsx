import { createContext, useContext } from "react";

export const LoginContext = createContext(null);

export function LoginContextProvider({ children }) {
  const [loginTopics, setLoginTopics] = useState("");

  return (
    <LoginContext.Provider value={{ loginTopics, setLoginTopics }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("ERROOOOOOR en el contexto");
  }
  return context;
};
