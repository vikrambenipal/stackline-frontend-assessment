import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductInfo } from '../features/sales/salesSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img { 
    width: 50%;
    align-self: center;
  }
  h1 {
    margin-bottom: 0px;
  }
  .subtitle {
    padding: 5px;
    margin: 0px;
    margin-bottom: 5px;
    color: grey;
    font-size: 14px;
  }
  .tag {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 15px;
    border: 1px solid #E1E1E1;
    font-size: 14px;
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
  padding-top: 10px;
  padding-bottom: 15px;
`

const ProductInfo = () => {

  const dispatch = useDispatch();
  const productInfo = useSelector(selectProductInfo);

  return (
    <Container>
      <img src={productInfo.image} />
      <h1>{productInfo.title}</h1>
      <p className="subtitle">{productInfo.subtitle}</p>
      <TagContainer>
        {productInfo.tags.map((tag,index) => {
          return <p className="tag" key={index}>{tag}</p>
        })}
      </TagContainer>
    </Container>
  )
}

export default ProductInfo;