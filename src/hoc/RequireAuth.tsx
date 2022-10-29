import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const RequireAuth = ({children}: any) => {
  const location = useLocation();
  const user = useAuth();
  
  if (!user) {
    return <Navigate to='/auth' state={{from: location}}/>;
  }
  
  return children;
}

export {RequireAuth};
