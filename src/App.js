import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';
import styled from 'styled-components';

const BtnWrapper = styled.div`
  display:flex;
  margin-bottom:20px;
`;

function App() {
  return (
      <> 
        <Provider store={store}>
          <BtnWrapper>
            <button>account</button>
            <button>calender</button>
          </BtnWrapper>
            <AddHistory/>
          <MonthList/>
        </Provider>
      </>
  );
}

export default App;
