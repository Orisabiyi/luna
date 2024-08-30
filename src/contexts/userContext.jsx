import { createContext } from "react";

const userContext = createContext();

function userContextProvider() {
  return <userContext.Provider value={{}}></userContext.Provider>;
}

export default userContextProvider;
