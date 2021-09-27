import React, { useState } from "react";
import { IUser } from "../types";

export const UserContext = React.createContext({
  user: { id: "", password: "", address: "" },
  writeAddress: (address: string) => {},
  logInUser: (data: { id: string; password: string }) => {},
  logOutUser: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({ id: "", password: "", address: "" });

  const writeAddress = (address: string) => setUser({ ...user, address });
  const logInUser = (data: { id: string; password: string }) =>
    setUser({ ...user, ...data });
  const logOutUser = () => setUser({ id: "", password: "", address: "" });

  return (
    <UserContext.Provider value={{ user, writeAddress, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
