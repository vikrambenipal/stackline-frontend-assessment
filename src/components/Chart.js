import React from 'react'
import styled from 'styled-components';
import {
  sortRetailSales
} from '../features/sales/salesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectSales } from '../features/sales/salesSlice';

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
            <th onClick={handleSort}>WEEK ENDING</th>
            <th onClick={handleSort}>RETAIL SALES</th>
            <th onClick={handleSort}>WHOLESALES</th>
            <th onClick={handleSort}>UNITS SOLD</th>
            <th onClick={handleSort}>RETAILER MARGIN</th>
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