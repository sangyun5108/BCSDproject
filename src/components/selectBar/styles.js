import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100px;
    margin-top:40px;
    display:flex;
    justify-content:center;
`;

export const MWrapper = styled.header`
    width:80%;
    height:100%;
    font-weight:800;
    display:flex;
    align-items:center;
    margin:72px 0px 0px 0;
`;

export const MonthWrapper = styled.div`
    display:flex;
    font-size:60px;
    padding-bottom:2px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:33.3333%;
`;

export const Years = styled.div`
    font-size:18px;
    color:#979797;
    font-weight:600;
`;

export const Months = styled.div`
    text-align:center;
`;

export const Button = styled.button`
    padding:0px;
    outline:none;
    font-size:55px;
    font-weight:800;
    border:none;
    background-color:white;
    color:#979797;
    transition : all .3s;
    &:hover{
        cursor:pointer;
        color:black;
    }
    &:hover{
        transform : translateY(-10%);
    }
`
export const WhiteToBlue = keyframes`
    0%{
        background : white;
        color : #166ff3;
    }
    100%{
        background : #166ff3;
        color : white;
    }
`
export const WhiteToRed = keyframes`
    0%{
        background : white;
        color : #f8123b;
    }
    100%{
        background : #f8123b;
        color : white;
    }
`
export const BlueButton = styled.button`
    border:2px solid #166ff3;
    font-size:25px;
    font-weight:800;
    border-radius:15px;
    width:280px;
    height:55px;
    margin-right:15px;
    background:${props=>props.active==='income'?"#166ff3":"white"};
    color:${props=>props.active==='income'?"white":"#166ff3"};
    transition : all .3s;
    &:hover{
        cursor:pointer;
        animation : ${WhiteToBlue}
    }
`
export const RedButton = styled.button`
    border:2px solid red;
    font-size:25px;
    font-weight:800;
    border-radius:15px;
    width:280px;
    height:55px;
    background:${props=>props.active==='expediture'?"#f8123b":"white"};
    color:${props=>props.active==='expediture'?"white":"#f8123b"};
    transition : all 0.3s;
    &:hover{
        cursor:pointer;
        animation : ${WhiteToRed}
    }
`;