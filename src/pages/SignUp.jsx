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
            const [loading, setLoading] = useState(false);
            const navigate =useNavigate()

            function createAccount(e){
                        e.preventDefault()
                        setLoading(true);
                        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
                        const body ={ email, name, image, password };

                        axios.post(URL, body)
                        .then(()=> navigate("/"))
                        .catch(err => {console.log(err.response.data),
                        alert(`Ocorreu o seguinte erro ao tentar realizar seu cadastro: \n ${err.response.data.message} \n Revise os campos e tente novamente.`)})
                        .finally(()=> setLoading(false))
            }

            const handleLogin= () =>{
                        navigate("/");
            };

            return(
                        <>
                        <Wrapper>
                        <Logo src="/trackit.svg"/>
                        <TypeField onSubmit={createAccount} disabled={loading}>
                        <input type = "email"  id = "signup-email" placeholder="email"  required value={email} onChange={e=> setEmail(e.target.value)} disabled={loading}/>
                        <input type = "password"  id = "signup-password" placeholder="senha"  required value={password} onChange={e=> setPassword(e.target.value)} disabled={loading}/>
                        <input type = "text"  id = "nome" placeholder="nome"  required value={name} onChange={e=> setName(e.target.value)} disabled={loading}/>
                        <input type = "text"  id = "foto" placeholder="link da foto"  required value={image} onChange={e=> setImage(e.target.value)} disabled={loading}/>
                        <LogButton type="submit" disabled={loading}>{loading ? "Salvando..." : "Cadastrar"}</LogButton>
                        </TypeField>
                        <Login onClick={handleLogin} disabled={loading}>Já tem uma conta? Faça o Login!</Login>
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
            background-color: ${(props) => (props.disabled ? "#9ed4fa" : "#52B6FF")} ;
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