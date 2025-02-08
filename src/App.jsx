import React, {useState} from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Habits from "./pages/Habits";
import Today from "./pages/Today";

function App() {
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Login setToken ={setToken}/>}/>
      <Route path="/cadastro" element={<SignUp/>}/>
      <Route path="/habitos" element={<Habits token={token}/>}/>
      <Route path="/hoje" element={<Today token={token}/>}/>
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
