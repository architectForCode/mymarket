import React, { useState } from "react";
import { IUser } from "../types";

const UserContext = React.createContext({});

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({ id: "", password: "", address: "" });

  const writeAddress = (address: string) => setUser({ ...user, address });
  const logInUser = (data: IUser) => setUser(data);

  return (
    <UserContext.Provider value={{ user, writeAddress, logInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
