import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import React from "react";

function Birth() {
  const navigate: NavigateFunction = useNavigate();
  const locstion = useLocation();
  const {signin}: any = useAuth();
  
  const fromPage = locstion.state?.from?.pathname || '/data-birth';
  
  const handlerSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    
    signin(user, () => navigate(fromPage, {replace: true}));
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          : <input name="username"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Birth;
