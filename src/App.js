import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  init,
  selectSales
} from './features/sales/salesSlice';
import Nav from './components/Nav';
import Chart from './components/Chart';
import Graph from './components/Graph';
import ProductInfo from './components/ProductInfo';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const sales = useSelector(selectSales);

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => dispatch(init(data[0])))
  },[])

  return (
    <div className="App">
      <Nav />
      <ProductInfo />
    </div>
  );
}

export default App;
