import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {Chart, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Graph = () => {

  Chart.register(CategoryScale, LineElement, LinearScale, PointElement);
  const dispatch = useDispatch();
  const sales = useSelector(selectSales);

  return (
    <Container>
      <h2>Retail Sales</h2>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        }}
        height={400}
        width={600}
      />
    </Container>
  )
}
export default Graph;