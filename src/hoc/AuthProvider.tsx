import React, {createContext, useState} from "react";

export const AuthContext: React.Context<any> = createContext(null);

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(null);
  const signin = (newUser: any, cd: any) => {
    setUser(newUser);
    cd();
  }
  const signout = (cd: any) => {
    setUser(null);
    cd();
  }
  
  const value = {user, signin, signout}
  
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
