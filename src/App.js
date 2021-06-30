import AddHistory from './components/addHistroy';
import {Provider} from 'react-redux';
import ShowList from './components/showList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AddHistory/>
      <ShowList/>
    </Provider>
  );
}

export default App;
