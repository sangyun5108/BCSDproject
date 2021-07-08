import AddHistory from './components/addHistroy';
import {Provider,useDispatch} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';
import {init} from './redux/actions';
import {useEffect} from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(init());
  },[dispatch]);

  return (
      <> 
        <AddHistory/>
        <MonthList/>
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
