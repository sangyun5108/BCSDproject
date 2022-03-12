import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Calendar from "./pages/calendar";
import AddHistory from "./components/addHistory";
import styled from "styled-components";
import Chart from "./pages/chart";
import getUserData from "./utils/getUserData";
import { init } from "./store/incomeExpeditureReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getData() {
      const list = await getUserData();
      dispatch(init({ list }));
    })();
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="addhistory" element={<AddHistory />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="chart" element={<Chart />} />
      </Routes>
    </Container>
  );
};

export default App;
