import React from "react";
import styled from "styled-components";

function Footer(){
            return(
                        <BarWrap>
                                    <Habits>
                                    <IconOn src="public\calendar-on.svg"/>
                                    Hábitos
                                    </Habits>
                                    <Today>
                                    <IconOff src="public\event-off.svg"/>
                                    Hoje
                                    </Today>
                        </BarWrap>
            )
};

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
            color: white;
            background-color:#52B6FF ;
`
const Today = styled.div`
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            width: 50%;
            height: 100%;
            color: #D4D4D4;
            background-color:#ffffff ;
`

const IconOn = styled.img`
            background-color:#52B6FF ;
            width: 24px;
`
const IconOff = styled.img`
            background-color:#ffffff ;
            width: 18px;
            margin-right: 3px;
`

export default Footer;