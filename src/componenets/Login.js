import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.messages)

        )
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                    src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
                    alt="slack"
                />
                <h1>Sign In</h1>
                <p>kala.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    background-color:#f8f8f8;
    height:100vh;
    display:grid;
    place-items:center;
`;
const LoginInnerContainer = styled.div`
     padding:100px;
     text-align:center;
     background-color:white;
     border-radius:10px;
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

     > img{
         height:100px;
         object-fit:contain;
         margin-bottom:40px;
     }
     > button{
         margin-top:50px;
         text-transform:inherit !important;
         background-color: #0a8d48 !important;
         color:white;
     }
`;
export default Login
