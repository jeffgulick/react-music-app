import React from 'react';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

export default function App(){
  return(
    <BrowserRouter>
      <div>
        <NavBar />
        <Router />
      </div>
    </BrowserRouter>
  )
}