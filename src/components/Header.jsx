import React from "react";
import styled from "styled-components";

function Header(){
            return(
                        <Bar>
                                    <Logo src="public\TrackIt@2x.svg"/>
                                    <Profile src="public\placeholder.jpg" />
                        </Bar>
            )
};

//----------------------------STYLES------------------------//

const Bar = styled.div`
            position: fixed;
            z-index: 1;
            margin-top: 100px;
            width: 101%;
            height: 70px;
            background-color:#126BA5 ;
`
const Logo = styled.img`
            position: absolute;
            top: 20px;
            left: 20px;
            width: 100px;
            background-color:#126BA5 ;
`

const Profile = styled.img`
            position: absolute;
            top: 10px;
            right: 20px;
            width: 50px;
            border-radius: 50px;
`

export default Header;