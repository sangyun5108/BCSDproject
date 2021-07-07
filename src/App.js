// import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';
import styled, { createGlobalStyle } from 'styled-components';

const btnBox = styled.div`
  display:flex;
  margin-bottom:20px;
`;

function App() {
  return (
      <> 
        <Provider store={store}>
          <btnBox>
            <button>account</button>
            <button>calender</button>
          </btnBox>
          <MonthList/>
        </Provider>
      </>
  );
}

export default App;
