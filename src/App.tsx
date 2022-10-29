import React from 'react';
import './App.scss';
import Auth from './auth/Auth';
import {Routes, Route, Link} from 'react-router-dom';
import Pokemons from "./pages/Pokemons";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import Birth from "./auth/Birth";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/data-birth' element={<Birth/>}/>
        <Route path='/' element={
          <RequireAuth>
            <Pokemons/>
          </RequireAuth>
        }/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
