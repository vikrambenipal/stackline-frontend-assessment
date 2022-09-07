import React from 'react'
import styled from 'styled-components';
import {
  sortRetailSales
} from '../features/sales/salesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';

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
    <div>
      <table>
        <tbody>
          <tr>
            <Th onClick={handleSort}>WEEK ENDING</Th>
            <Th onClick={handleSort}>RETAIL SALES</Th>
            <Th onClick={handleSort}>WHOLESALES</Th>
            <Th onClick={handleSort}>UNITS SOLD</Th>
            <Th onClick={handleSort}>RETAILER MARGIN</Th>
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
    </div>
  )
}
export default Chart;