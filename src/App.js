import AddHistory from './components/addHistroy';
import {Provider,useDispatch} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';
import {init} from './redux/actions';
import styled from 'styled-components';
import {useEffect} from 'react';

const BtnWrapper = styled.div`
  display:flex;
  margin-bottom:20px;
`;

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(init());
  },[dispatch]);

  return (
      <> 
          <BtnWrapper>
            <button>account</button>
            <button>calender</button>
          </BtnWrapper>
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
