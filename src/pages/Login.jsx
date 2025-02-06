import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Login(){
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");

            function sendLogin(e){
                        e.preventDefault();
                        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
                        const body = {email, password}

                        axios.post(URL, body)
                        .then()
                        .catch(err=> console.log(err.response.data)); 
            }

            return(
                        <>
                        <Wrapper>
                        <Logo src="../public/trackit.svg"/>
                        <TypeField onSubmit={sendLogin}>
                        <input type = "email"  id = "login-email" placeholder="email"  required value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type = "password"  id = "login-password" placeholder="senha"  required value={password} onChange={e => setPasswordl(e.target.value)}/>
                        <LogButton type="submit">Entrar</LogButton>
                        </TypeField>
                        <SignUp>Não possui uma conta? Cadastre-se!</SignUp>
                        </Wrapper>
                        </>
            )

};

const Logo = styled.img`
            width: 180px;
            margin-top: 80px;
            margin-bottom: 40px;
`

const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`

const TypeField = styled.form`
            display: flex;
            flex-direction: column;
            justify-content: center;

            input{
                        border: 1px solid #D4D4D4;
                        border-radius: 5px;
                        padding: 10px;
                        margin:3px;
                        width: 75vw;
            }

`

const LogButton = styled.button`
            font-size: 20px;
            font-weight: 200;
            width: 100%;
            height:40px;
            border-radius: 8px;
            margin-top: 3px;
            background-color: #52B6FF;
            color: white;
            border: 1px solid #52B6FF;
            `

const SignUp = styled.p`
            font-size: 13px;
            text-decoration: underline;
            margin-top: 30px;
            color: #52B6FF;
`

export default Login;