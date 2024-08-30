import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const createUserContext = createContext();

export function UserContextProvider() {
  const [userProfile, setUserProfile] = useState({});

  return (
    <createUserContext.Provider
      value={{
        userProfile,
        setUserProfile,
      }}
    ></createUserContext.Provider>
  );
}

export function UserContext() {
  const userContext = useContext(createUserContext);
  return userContext;
}

export default { UserContextProvider, UserContext };
