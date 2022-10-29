import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const RequireAuth = ({children}: any) => {
  const location = useLocation();
  const user: any = useAuth();
  console.log(location);
  console.log(user);
  
  if (!user.userName) {
    return <Navigate to='/auth' state={{from: location}}/>;
  }
  if (!user.userDateBirth) {
    return <Navigate to='/data-birth' state={{from: location}}/>;
  }
  
  return children;
}

export {RequireAuth};
