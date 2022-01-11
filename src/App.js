import {Route,Routes} from 'react-router-dom';
import MainPage from './pages/mainPage';
import Calendar from './pages/calendar';
import AddHistory from './components/addHistory';
import styled from 'styled-components';
import Chart from './pages/chart';

const Container = styled.div`
  width:100vw;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:30px;
`;

const App = () => {

  return(
    <Container>
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='addhistory' element={<AddHistory/>}/>
          <Route path='calendar' element={<Calendar/>}/>
          <Route path='chart' element={<Chart/>}/>
      </Routes>
    </Container>
  );
}

export default App;
