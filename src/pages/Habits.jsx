import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Habits(){
            const [habits, setHabits] = useState(null);

            useEffect(()=>{
                        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
                        axios.get(URL)
                        .then(res => setHabits(res.data))
                        .catch(err => console.log(err.response.data));
            },[])

            if (habits === null){
                        return(
                                    <Wrapper>Carregando...</Wrapper>
                        )
            }

            return(
                        <>
                        <Header></Header>
                        <Wrapper>
                                    <AddHabit>
                                                <h1>Meus hábitos</h1>
                                                <h2>+</h2>
                                    </AddHabit>
                                    <HabitBox>
                                                <HabitForm>                                 
                                                <input type = "text"  id = "habit-name" placeholder="nome do hábito"  required/> 
                                                <Days>
                                                <h1>D</h1><h1>S</h1><h1>T</h1><h1>Q</h1><h1>Q</h1><h1>S</h1><h1>S</h1>            
                                                </Days>
                                                <Options>
                                                            <Cancel>Cancelar</Cancel>
                                                            <Save>Salvar</Save>
                                                </Options>      
                                                </HabitForm>          
                                    </HabitBox>
                                    <HabitBox>
                                                <Habit>
                                                            <h1>Hábito placeholder</h1>
                                                </Habit>
                                                <Days><h1>D</h1><h1>S</h1><h1>T</h1><h1>Q</h1><h1>Q</h1><h1>S</h1><h1>S</h1>         </Days>
                                    </HabitBox>
                                    <Warning>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Warning>
                        </Wrapper>
                        <Footer></Footer>
                        </>
            )
};


const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 100px;
            `

const AddHabit = styled.div`
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            
            h1{
                        font-weight:400;
                        font-size: 23px;
                        color:#126BA5 ;
                        margin-right: 140px;
                        padding-top: 3px;
            }
            
            h2{
                        font-weight:400;
                        font-size: 26px;
                        color:#FFFFFF ;
                        background-color: #52B6FF;
                        padding: 2px 15px 4px;
                        border-radius: 5px;
            }
            `

const HabitBox = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px 15px 5px;
            margin-bottom: 10px;
            border-radius: 8px;
            background-color: #FFFFFF;  
            position: relative;
            box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 5%);
            width: 90%;
            `

const HabitForm = styled.form`
            background-color: #FFFFFF;
            
            input{
                        border: 1px solid #D4D4D4;
                        border-radius: 5px;
                        padding: 10px;
                        margin:3px;
                        margin-top: 10px;
                        width: 80vw;
                        font-size: 16px;
                        color: #666666;
                        background-color: #FFFFFF;
            }
            
            input::placeholder{
                        font-size: 16px;
                        color: #D4D4D4;
            }
            `

const Days = styled.div`
            display: flex;
            background-color: #FFFFFF;
            
            h1{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 25px;
                        font-weight: 400;
                        font-size: 18px;
                        margin: 3px;
                        border-radius: 5px;
                        color:#D4D4D4;
                        border: 1px solid #D4D4D4;
                        background-color: #FFFFFF;
            }
            `
const Options = styled.div`
            display: flex;
            position: relative;
            max-width: fit-content;
            margin-top: 20px;
            background-color: #FFFFFF;
            color: #52B6FF;
            bottom: 5px;
            left: 132px;
            `
const Cancel = styled.button`
            font-size:16px;
            background-color: #FFFFFF;
            color: #52B6FF;
            border: 1px solid #FFFFFF;
            `

const Save = styled.button`
            font-size: 16px;
            color: #FFFFFF;
            background-color: #52B6FF;
            padding: 6px 14px 6px;
            border-radius: 6px;
            border: 1px solid #52B6FF;
            margin-left: 20px;
            `
const Warning = styled.div`
            font-size:18px;
            color: #666666;
            display: flex;
            justify-content: center;
            padding: 20px;
            `
const Habit = styled.div`
            background-color: #FFFFFF;
            margin: 3px;

            h1{
                        background-color: #FFFFFF;
                        font-size: 20px;
                        font-weight: 400;
                        color: #666666
            }
`

export default Habits;