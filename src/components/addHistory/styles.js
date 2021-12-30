import styled,{keyframes,css} from "styled-components";

export const translate = keyframes`
    0% {
        transform:translateY(740px);
        opacity:1;
    }
    100% {
        transform:translateY(0px);
    }
`


export const retranslate = keyframes`
    0% {
        transform:translateY(0px);
    }

    100% {
        transform:translateY(740px);
        opacity:1;
    }
`


export const Wrapper = styled.div`
    border-bottom:0px;
    position:absolute;
    bottom:0px;
    width:600px;
    height:750px;
    background-color:white;
    border-radius:25px 25px 0px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow:0px 0px 20px grey;
    animation:${props=>props.active?css`${retranslate} 0.5s ease-in-out`:css`${translate} 0.5s ease-in-out`};
`;


export const BtnWrapper = styled.div`
    width:100%;
    height:6vh;
    display:flex;
    justify-content:center;
    margin-top:100px;
`;


export  const IncomeBtn = styled.button`
    width:210px;
    height:50px;
    margin-right:30px;
    text-align:center;
    font-size:25px;
    font-weight:bold;
    border-radius:10px;
    border:none;
    background:${props => props.active===true?'#424242':''};
    color:${props => props.active===true?'white':''};
    &:hover{
        cursor:pointer;
    }
`;


export const ExpeditureBtn = styled.button`
    width:210px;
    height:50px;
    text-align:center;
    font-size:25px;
    font-weight:bold;
    border-radius:10px;
    border:none;
    background:${props => props.active===false?'#424242':''};
    color:${props => props.active===false?'white':''};
    &:hover{
        cursor:pointer;
    }
`;


export const InputDayWrapper = styled.div`
    margin:50px 0 30px 0;
    display:flex;
    justify-content:center;
`;


export const InputYear = styled.input`
    border:none;
    text-align:center;
    width:70px;
    outline:none;
    font-size:25px;
    font-weight:650;
    &:focus{
        color:#78909c;
    }
    padding:0;
`;


export const InputDay = styled.input`
    border:none;
    text-align:center;
    width:40px;
    outline:none;
    font-size:25px;
    font-weight:650;
    &:focus{
        color:#78909c;
    }
    padding:0;
`;


export const InputLabel = styled.input`
    width:450px;
    height:65px;
    border-radius:12px;
    outline:none;
    border:none;
    background-color:#f5f5f5;
    margin-bottom:25px;
    font-size:25px;
    padding-left:25px;
`

export const InputAmount = styled.input`
    width:450px;
    height:65px;
    border-radius:12px;
    outline:none;
    border:none;
    background-color:#f5f5f5;
    margin-bottom:20px;
    font-size:25px;
    padding-left:25px;
`;


export const InputLabelAmountWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    margin-top:30px;
`;


export const DoneButton = styled.button`
    width:500px;
    height:65px;
    border-radius:10px;
    margin-top:100px;
    outline:none;
    border:none;
    background-color:${props=>props.active?'#166ff3':'#f8123b'};
    color:white;
    font-size:30px;
    font-weight:700;
    &:hover{
        cursor:pointer;
    }
`;


export const Xbutton = styled.button`
    position:absolute;
    top:2%;
    right:3%;
    z-index:1;
    width:30px;
    height:30px;
    text-align:center;
    border-radius:50%;
    font-size:15px;
    background-color:#424242;
    outline:none;
    border:none;
    color:white;
    font-weight:700;
    &:hover{
        cursor:pointer;
    }
`

export const InputMoneyTypeWrapper = styled.div`
    width:250px;
    height:50px;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`;


export const InputCashTypeBtn = styled.div`
    height:40px;
    width:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${props=>props.active==='현금'||props.active==='월급'?'#424242':'#f5f5f5'};
    color:${props=>props.active==='현금'||props.active==='월급'?'white':'black'};
    border-radius:10px;
    font-weight:700;
    &:hover{
        cursor:pointer;
    }
`;


export const InputCardTypeBtn = styled.div`
    height:40px;
    width:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${props=>props.active==='카드'||props.active==='용돈'?'#424242':'#f5f5f5'};
    color:${props=>props.active==='카드'||props.active==='용돈'?'white':'black'};
    border-radius:10px;
    font-weight:700;
    &:hover{
        cursor:pointer;
    }
`;


export const InputMoneyTypeText = styled.div`
    font-size:20px;
    height:20px;
`;