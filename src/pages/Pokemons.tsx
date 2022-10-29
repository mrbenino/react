import React from 'react';
import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

function Pokemons() {
  const {signout}: any = useAuth();
  const navigate = useNavigate();
  
  return (
    <>
      <div>Pokemons</div>
      <button onClick={() => signout(() => navigate('/auth', {replace: true}))}>Log Out</button>
    </>
  )
}

export default Pokemons;
