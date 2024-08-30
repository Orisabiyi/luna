import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const createUserContext = createContext();

export function UserContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});

  return (
    <createUserContext.Provider
      value={{
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </createUserContext.Provider>
  );
}

export function UserContext() {
  const userContext = useContext(createUserContext);
  return userContext;
}

export default { UserContextProvider, UserContext };
