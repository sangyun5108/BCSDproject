import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  text-align:center;
  min-height:100vh;
`;

ReactDOM.render(
  <Container>
    <App/>
  </Container>,
  document.getElementById('root')
);
