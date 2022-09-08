import React from 'react'
import styled from 'styled-components';
import {
  sortRetailSales
} from '../features/sales/salesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';

const Container = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 15px;
  th {
    font-size: 14px;
    font-weight: normal;
  }
  table {
    table-layout: fixed;
    width: 100%;
  }
  .header {
    font-weight: bold;
  }
  img {
    width: 10px;
  }
`
const Th = styled.th`
  cursor pointer;
`

const Chart = () => {

  const dispatch = useDispatch();
  const sales = useSelector(selectSales);

  const handleSort = (e) => {
    const header = e.target.innerText;
    dispatch(sortRetailSales(header));
  }
  console.log(sales)

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <Th className="header" onClick={handleSort}>WEEK ENDING</Th>
            <Th className="header" onClick={handleSort}>RETAIL SALES</Th>
            <Th className="header" onClick={handleSort}>WHOLESALES</Th>
            <Th className="header" onClick={handleSort}>UNITS SOLD</Th>
            <Th className="header" onClick={handleSort}>RETAILER MARGIN</Th>
          </tr>
          {sales.map((sale,index) => {
            return (
              <tr key={index}>
                <th>{sale.weekEnding}</th>
                <th>{sale.retailSales}</th>
                <th>{sale.wholesaleSales}</th>
                <th>{sale.unitsSold}</th>
                <th>{sale.retailerMargin}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}
export default Chart;