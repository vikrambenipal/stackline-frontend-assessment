import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {Chart, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const Graph = () => {

  Chart.register(CategoryScale, LineElement, LinearScale, PointElement);
  const sales = useSelector(selectSales);

  const getRetailSales = () => {
    const retailSales = sales.map(sale => {
      return sale.retailSales;
    })
    return retailSales
  }
  const getWholesalelSales = () => {
    const wholesaleSales = sales.map(sale => {
      return sale.wholesaleSales;
    })
    return wholesaleSales;
  }
  const getWeekEndings = () => {
    const weekEndings = sales.map(sale => {
      return sale.weekEnding;
    })
    return weekEndings;
  }

  return (
    <Container>
      <p>Retail Sales</p>
      <Line
        data={{
          labels: getWeekEndings(),
          options: {
            scales: {
                xAxis: {
                    ticks: {
                        maxTicksLimit: 10
                    }
                }
            }
        },
          datasets: [
            {
              label: 'Retail Sales',
              data: getRetailSales(),
              backgroundColor: [
                  '#4DAAF3',
              ],
              borderColor: [
                  '#4DAAF3',
              ],
              borderWidth: 3
          },
          {
            label: 'Wholesale Sales',
            data: getWholesalelSales(),
            backgroundColor: [
                '#A1ACC1',
            ],
            borderColor: [
                '#A1ACC1',
            ],
            borderWidth: 3
        },
        ]
        }}
        height={400}
        width={600}
      />
    </Container>
  )
}
export default Graph;