import React,{useEffect} from 'react'
import axios from "axios";
import Card from './cards/Card';
import styled from 'styled-components';
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Shoes = ({listOfShoes}) => {

  return (
    <Div>
      {listOfShoes.map(({price,image,brand,id})=>{
        return <Card id={id} price={price} image={image} brand={brand}  key={id}></Card>
      })}
    </Div>
  )
}

export default Shoes