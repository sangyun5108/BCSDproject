import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App';
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

ReactDOM.render(
  <Container>
    <AppWrapper/>
  </Container>,
  document.getElementById('root')
);
