import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";


function Today() {
            const { token } = useContext(AuthContext);
            const [habits, setHabits] = useState([]);
            const [today, setToday] = useState(new Date());
            const [completedHabits, setCompletedHabits] = useState(new Set());
            

            const formatDate = (date) => {
                        const options = { weekday: 'long', day: 'numeric', month: 'long' };
                        return new Date(date).toLocaleDateString('pt-BR', options);
                    };

            useEffect(() => {
                const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
        
                axios.get(URL, config)
                    .then(res => {
                        setHabits(res.data);
                        const completed = new Set(res.data.filter(habit => habit.done).map(habit => habit.id));
                        setCompletedHabits(completed);
                    })
                    .catch(err => console.log(err.response.data));
            }, [token]);
        
            const handleCheckmarkClick = (habitId, isChecked) => {
                const URL = isChecked
                    ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`
                    : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`;  
        
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
        
                axios.post(URL, {}, config)
                    .then(() => {
                        setCompletedHabits(prev => {
                            const newCompleted = new Set(prev);
                            if (isChecked) {
                                newCompleted.delete(habitId); 
                            } else {
                                newCompleted.add(habitId);
                            }
                            return newCompleted;
                        });
                    })
                    .catch(err => console.log(err.response.data));
            };
        
            return (
                <>
                    <Header />
                    <Wrapper>
                        <Weekday>{formatDate(today)}</Weekday>
        
                        {habits.length === 0 ? (
                            <p>Nenhum hábito para hoje!</p>
                        ) : (
                            habits.map(habit => (
                                <HabitBox key={habit.id}>
                                    <Title>{habit.name}</Title>
                                    <Streak>
                                        <p>Sequência atual: {habit.currentSequence} dias</p>
                                    </Streak>
                                    <Streak>
                                        <p>Seu recorde: {habit.highestSequence} dias</p>
                                    </Streak>
                                    <Checkmark
                                        src="public/checkmark.svg"
                                        onClick={() => handleCheckmarkClick(habit.id, completedHabits.has(habit.id))}
                                        style={{
                                            filter: completedHabits.has(habit.id) ? 'invert(36%) sepia(74%) saturate(2067%) hue-rotate(118deg) brightness(104%) contrast(98%)' : 'none'
                                        }}
                                    />
                                </HabitBox>
                            ))
                        )}
                    </Wrapper>
                    <Footer />
                </>
            );
        }
//---------------------STYLES-------------------------

const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 100px;
`


const Weekday = styled.div`
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            font-weight:400;
            font-size: 23px;
            color:#126BA5 ;
            margin-left: 20px;
            margin-right: 140px;
            padding-top: 3px;
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
            height: 100px;
            `

const Title = styled.h1`
            font-weight: 400;
            font-size: 22px;
            color: #666666;
            background-color: #FFFFFF;
            margin-top: 5px;
            margin-bottom: 2px;
            `
const Streak = styled.div`
            background-color: #FFFFFF;
            
            p{
                        font-size: 14px;
                        font-weight: 400;
                        color: #666666;
                        background-color: #FFFFFF;
            }
`

const Checkmark = styled.img`
            position: absolute;
            right: 15px;
            background-color: #EBEBEB;
            width: 70px;
            height: 70px;
            padding: 15px;
            border-radius: 5px;

`

export default Today;