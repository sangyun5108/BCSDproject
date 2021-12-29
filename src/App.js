import { Route,Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Calendar from './pages/calendar';
import AccountBook from './pages/accountBook';
import AddHistory from './components/addHistory';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:80vh;
  margin-top:30px;
`;

const App = () => {
  return(
    <Container>
      <MainPage/>
      <Routes>
          <Route path='/' element={<AccountBook/>}/>
          <Route path='calendar' element={<Calendar/>}/>
          <Route path='addhistory' element={<AddHistory/>}/>
      </Routes>
    </Container>
  );
}

export default App;
