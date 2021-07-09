import AddHistory from './components/AddHistory';
import {Provider,useDispatch} from 'react-redux';
import store from './redux/store';
import MonthList from './components/MonthList';
import {init} from './redux/actions';
import {useEffect,useState} from 'react';

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
        <button onClick={onClickAdd}>Add History</button>
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
