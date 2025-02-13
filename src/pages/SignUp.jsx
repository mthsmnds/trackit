import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

function SignUp(){
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [name, setName] = useState("");
            const [image, setImage] = useState("");
            const navigate =useNavigate()

            function createAccount(e){
                        e.preventDefault()
                        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
                        const body ={ email, name, image, password };

                        axios.post(URL, body)
                        .then(()=> navigate("/"))
                        .catch(err => console.log(err.response.data))
            }

            const handleLogin= () =>{
                        navigate("/");
            };

            return(
                        <>
                        <Wrapper>
                        <Logo src="/trackit.svg"/>
                        <TypeField onSubmit={createAccount}>
                        <input type = "email"  id = "signup-email" placeholder="email"  required value={email} onChange={e=> setEmail(e.target.value)}/>
                        <input type = "password"  id = "signup-password" placeholder="senha"  required value={password} onChange={e=> setPassword(e.target.value)}/>
                        <input type = "text"  id = "nome" placeholder="nome"  required value={name} onChange={e=> setName(e.target.value)}/>
                        <input type = "text"  id = "foto" placeholder="foto"  required value={image} onChange={e=> setImage(e.target.value)}/>
                        <LogButton type="submit">Cadastrar</LogButton>
                        </TypeField>
                        <Login onClick={handleLogin}>Já tem uma conta? Faça o Login!</Login>
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

const Login = styled.p`
            font-size: 13px;
            text-decoration: underline;
            margin-top: 30px;
            color: #52B6FF;
`

export default SignUp;