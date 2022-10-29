import {Navigate, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import React from "react";

function Birth() {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const {signin}: any = useAuth();
  const user: any = useAuth();
  console.log(user);
  
  if (user.userDateBirth) {
    return <Navigate to='/' state={{from: location}}/>;
  }
  
  const handlerSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const dateBirth = form.dateBirth.value;
    
    signin({dateBirth: dateBirth}, () => navigate('/', {replace: true}));
  };
  
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          Date of Birth : <input type="date" name="dateBirth"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Birth;
