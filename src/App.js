import {Provider} from 'react-redux';
import store from './redux/store';
import MainPage from '../src/pages/MainPage';

const App = () => {
  return(
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

export default App;
