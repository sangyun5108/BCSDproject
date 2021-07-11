import {Provider} from 'react-redux';
import store from './redux/store';
import AccountBook from '../src/pages/AccountBook';

const App = () => {
  return(
    <Provider store={store}>
      <AccountBook/>
    </Provider>
  );
}

export default App;
