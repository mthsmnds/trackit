import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthContext from "../contexts/AuthContext";

function Today(){
            const {token} = useContext(AuthContext);


            return(
                        <>
                        <Header></Header>
                        <Wrapper>
                                    <Weekday>Segunda, 31/02</Weekday>
                                    <HabitBox>
                                                <Title>Hábito placeholder</Title>
                                                <Streak><p>Sequência atual: 4 dias</p></Streak>
                                                <Streak><p>Seu recorde: 6 dias</p></Streak>
                                                <Checkmark src="public\checkmark.svg"/>
                                    </HabitBox>
                        </Wrapper>
                        <Footer></Footer>
                        </>
            )

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