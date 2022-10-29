import React, {createContext, useState} from "react";

export const AuthContext: React.Context<any> = createContext(null);

export const AuthProvider = ({children}: any) => {
  let userData: {userName: string, userDateBirth: string} = {userName: '', userDateBirth: ''};
  const data = JSON.parse(localStorage.getItem('user') as string);
  
  if (data) {
    userData = {...data};
  }
  
  console.log(userData);
  
  const [userName, setUserName] = useState<string>(userData.userName);
  const [userDateBirth, setUserDateBirth] = useState<string>(userData.userDateBirth);
  
  const signin = (user: {name?: string, dateBirth?: string}, cd: any) => {
    if(user.name) {
      setUserName(user.name);
      userData.userName = user.name;
      localStorage.setItem('user', JSON.stringify(userData));
    }
    if (user.dateBirth) {
      setUserDateBirth(user.dateBirth);
      userData.userDateBirth = user.dateBirth;
      localStorage.setItem('user', JSON.stringify(userData));
    }
    cd();
  };
  
  const signout = (cd: any) => {
    setUserName('');
    setUserDateBirth('');
    localStorage.removeItem('user');
    cd();
  };
  
  const value = {
    userName,
    userDateBirth,
    signin,
    signout
  };
  
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
