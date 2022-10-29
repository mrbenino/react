import React from 'react';
import './Auth.scss';
import {Navigate, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const Auth = () => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const {signin}: any = useAuth();
  const user: any = useAuth();
  console.log(user);
  
  if (user.userName) {
    return <Navigate to='/data-birth' state={{from: location}}/>;
  }
  
  const handlerSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    
    signin({name: username}, () => navigate('/data-birth', {replace: true}));
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          Name: <input name="username"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth;
