import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    height:60px;
    align-items:center;
    justify-content:center;
`;

export const BtnWrapper = styled.nav`
    width:150px;
    margin-top:25px;
    display:flex;
    justify-content:space-between;
`;

export const Btn = styled.button`
    width:30px;
    padding:0px;
    font-size:30px;
    border:none;
    outline:none;
    background:none;
    &:hover{
        cursor:pointer;
        transform:scale(1.3);
        transition:transform 0.5s linear;
    }
`;

export const Divide = styled.div`
    width:2px;
    height:32px;
    background:black;
`;
