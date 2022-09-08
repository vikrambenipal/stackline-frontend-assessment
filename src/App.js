import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { 
  init,
} from './features/sales/salesSlice';
import Nav from './components/Nav';
import Chart from './components/Chart';
import Graph from './components/Graph';
import ProductInfo from './components/ProductInfo';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row; 
  //justify-content: space-between
  height: 100%;
  margin-top: 50px;
`
const SalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => dispatch(init(data[0])))
  })

  return (
    <div className="App">
      <Nav />
      <Container>
        <ProductInfo />
        <SalesContainer>
          <Graph />
          <Chart />
        </SalesContainer>
      </Container>
    </div>
  );
}

export default App;
