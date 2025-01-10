import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Habits(){
            return(
                        <>
                        <Header></Header>
                        <Wrapper>AHAHHAAHAHHAH</Wrapper>
                        <Footer></Footer>
                        </>
            )
};

export default Habits;

const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 120px;
            background-color: #123456;
`