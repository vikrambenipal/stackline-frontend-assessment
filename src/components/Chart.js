import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';

const Chart = () => {

  const dispatch = useDispatch();
  const sales = useSelector(selectSales);
  console.log(sales)

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
          {sales.map((sale,index) => {
            return (
              <tr>
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