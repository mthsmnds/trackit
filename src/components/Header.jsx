import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function Header(){
            const [user] = useContext(UserContext)

            return(
                        <Bar>
                                    <Logo src="/TrackIt@2x.svg"/>
                                    {user ? <Profile src={user.image} /> : <p>Carregando...</p>}
                        </Bar>
            )
};

//----------------------------STYLES------------------------//

const Bar = styled.div`
            position: fixed;
            z-index: 1;
            width: 100vw;
            height: 70px;
            box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 5%);
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