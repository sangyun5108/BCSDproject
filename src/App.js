import AddHistory from './components/AddHistory';
import {Provider,useDispatch} from 'react-redux';
import store from './redux/store';
import MonthList from './components/MonthList';
import {init} from './redux/actions';
import {useEffect,useState} from 'react';
import styled from 'styled-components';

const AddHistoryBtn = styled.button`
  position:absolute;
  bottom:7%;
  width:12%;
  height:5%;
  border-radius:10px;
  outline:none;
  border:none;
  background:#424242;
  color:white;
  font-size:20px;
  font-weight:bold;
  &:hover{
    cursor:pointer;
  }
  box-shadow:0px 0px 10px 5px lightgrey;
`;

function App() {

  const dispatch = useDispatch();
  const [addHistory,setAddHistory] = useState(false);

  const onClickAdd = () => {
    setAddHistory(true);
  }

  useEffect(()=>{
    dispatch(init());
  },[dispatch]);

  return (
      <> 
        <MonthList/>
        <AddHistoryBtn onClick={onClickAdd}>Add History</AddHistoryBtn>
        {addHistory?<AddHistory setAddHistory={setAddHistory}/>:<></>}
      </>
  );
}

const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default AppWrapper;
