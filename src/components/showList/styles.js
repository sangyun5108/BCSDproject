import styled,{keyframes} from 'styled-components';

export const UlWrapper = styled.ul`
    padding-left:0px;
    height:600px;
    min-width:660px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-conten:center;
    overflow:auto;
`;

export const ListWrapper = styled.div`
    width:550px;
    height:80px;
    border-radius:20px;
    background:#f5f5f5;
    margin-bottom:15px;
    display:flex;
    align-items:center;
    position:relative;
`;

export const List = styled.li`
    list-style:none;
    width:600px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Label = styled.div`
    font-weight:700;
    font-size:20px;
`;

export const Amount = styled.div`
    color:${props=>props.active>=0?"#166ff3":"#f8123b"};
    font-weight:700;
    margin-right:20px;
    font-size:20px;
`;

export const Datelist = styled.div`
    text-align:center;
    margin-bottom:5px;
    font-size:17px;
    color:grey;
`;

export const rotate = keyframes`
    from{
        transfrom:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }
`
;

export const DeleteBtn = styled.button`
    position:absolute;
    width:50px;
    height:30px;
    top:7px;
    right:0px;
    border-radius:50%;
    outline:none;
    text-align:center;
    border:none;
    background:none;
    &:hover{
        cursor:pointer;
        animation:${rotate} 0.5s linear infinite;
    }
`;

export const EditBtn = styled.button`
    position:absolute;
    width:50px;
    height:30px;
    bottom:7px;
    right:0px;
    border-radius:50%;
    outline:none;
    text-align:center;
    border:none;
    background:none;
    &:hover{
        cursor:pointer;
        animation:${rotate} 0.5s linear infinite;
    }
`;

export const MoneyTypeAndLabel =styled.div`
    margin-left:20px;
`;

export const MoneyType = styled.div`
    font-size:15px;
    font-weight:600;
    margin-bottom:5px;
    color:grey;
`

export const DeleteAndEditBox = styled.div`
    background:none;
    width:50px;
    height:80px;
    border-radius:0 20px 20px 0px;
`