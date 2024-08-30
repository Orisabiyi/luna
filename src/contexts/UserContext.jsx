import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const createUserContext = createContext();

export function UserContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});

  useEffect(
    function () {
      sessionStorage.setItem("address", JSON.stringify(userProfile));
    },
    [userProfile]
  );

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

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function UserContext() {
  const userContext = useContext(createUserContext);
  return userContext;
}

export default { UserContextProvider, UserContext };
