import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductInfo } from '../features/sales/salesSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 100%;
  margin-top: 60px;
  margin-left: 20px;
  padding-top: 40px;
  box-shadow: 2px 2px 10px rgb(0,0,0,0.25);
  img { 
    width: 50%;
    align-self: center;
  }
  .tag {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 5px 15px;
    border: 1px solid #E1E1E1;
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
  padding-top: 10px;
`

const ProductInfo = () => {

  const dispatch = useDispatch();
  const productInfo = useSelector(selectProductInfo);

  return (
    <Container>
      <img src={productInfo.image} />
      <h1>{productInfo.title}</h1>
      <p>{productInfo.subtitle}</p>
      <TagContainer>
        {productInfo.tags.map((tag,index) => {
          return <p className="tag" key={index}>{tag}</p>
        })}
      </TagContainer>
    </Container>
  )
}

export default ProductInfo;