import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import store from './redux/store';
import MonthList from './components/monthList';

function App() {
  return (
    <Provider store={store}>
      <AddHistory/>
      <MonthList/>
    </Provider>
  );
}

export default App;
