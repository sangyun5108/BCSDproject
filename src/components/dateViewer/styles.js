import styled from 'styled-components'

export const Controler = styled.div`
    display : flex;
    justify-content : center;
`
export const DateSetContainer = styled.div`
    width : 100%;
    background : white;
    text-align : center;
    font-weight : 600;
    font-size : 60px;
`
export const Years = styled.div`
    font-size : 12px;
    color : gray;
`
export const Monthselector = styled.div`
    width : 33.33333%;
    margin : 72px 0;
    color : gray;
    &:hover{
        color : black;
        cursor : pointer;
    }
`
export const Now = styled.div`
    width : 33.33333%;
    margin: 72px 0;
`
export const monthList = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'
]
