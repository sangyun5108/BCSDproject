import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';
import Calender from './components/Calender'

function App() {
  return (
    <Provider store={store}>
      {/* <AddHistory/>
      <MonthList/> */}
      <Calender/>
    </Provider>
  );
}

export default App;
