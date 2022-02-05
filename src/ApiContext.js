import React, { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const [user, setUser] = useState({
    email: null,
    nom: null,
    prenom: null,
    password: null,
    //sexe: null,
    telephone: null,
    ville: null,
    datenaissance: null,
    description: null,
  });

  return (
    <AppContext.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </AppContext.Provider>
  );
}