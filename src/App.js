import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import ShowList from './components/showList';
import store from './redux/store';
import MonthList from './components/monthList';

function App() {
  return (
    <Provider store={store}>
      <AddHistory/>
      <ShowList/>
      <MonthList/>
    </Provider>
  );
}

export default App;
