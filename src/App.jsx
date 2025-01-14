import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Habits from "./pages/Habits";
import Today from "./pages/Today";

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<SignUp/>}/>
      <Route path="/habitos" element={<Habits/>}/>
      <Route path="/hoje" element={<Today/>}/>
    </Routes>
    </BrowserRouter>
  )
}

//------------------------------STYLES-----------------------------

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Lexend Deca", serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
`

export default App
