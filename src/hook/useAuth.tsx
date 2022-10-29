import React, {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

export function useAuth(): React.Context<any> {
  return useContext(AuthContext);
}
