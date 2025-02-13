import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
            const location = useLocation();
            const navigate = useNavigate();
        
            const isHabits = location.pathname === "/habitos";
            const isToday = location.pathname === "/hoje";
        
            return (
                <BarWrap>
                    <Habits onClick={() => navigate("/habitos")} active={isHabits ? "true" : undefined}>
                        <Icon 
                            src={isHabits ? "/calendar-on.svg" : "/calendar-off.svg"} 
                            style={{ width: "26px" }} 
                        />
                        Hábitos
                    </Habits>
        
                    <Today onClick={() => navigate("/hoje")} active={isToday ? "true" : undefined}>
                        <Icon 
                            src={isToday ? "/event-on.svg" : "/event-off.svg"} 
                            style={{ width: "20px" }} 
                        />
                        Hoje
                    </Today>
                </BarWrap>
            );
        }
//----------------------------STYLES------------------------//

const BarWrap = styled.div`
            position: fixed;
            z-index: 1;
            bottom: 0;
            display: flex;
            width: 101%;
            height: 70px;
            background-color:#126BA5 ;
`
const Habits = styled.div`
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            width: 50%;
            height: 100%;
            color: ${(props) => (props.active ? "white" : "#D4D4D4")};
            background-color: ${(props) => (props.active ? "#52B6FF" : "#FFFFFF")};
`
const Today = styled.div`
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            width: 50%;
            height: 100%;
            color: ${(props) => (props.active ? "white" : "#D4D4D4")};
            background-color: ${(props) => (props.active ? "#52B6FF" : "#ffffff")};
`

const Icon = styled.img`
            width: 24px;
            margin-right: 8px;
            background-color: inherit;
`;

export default Footer;