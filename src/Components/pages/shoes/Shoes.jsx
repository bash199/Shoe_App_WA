import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./cards/Card";
import styled from "styled-components";
import Spinner from "../../spinner/Spinner";

const Div = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;
const Shoes = ({listOfShoes, setIsLoading, isLoading}) => {
   const [state, setState] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         setIsLoading(true);
         try {
            const {data} = await axios.get(
               `https://6377843f5c477765121fffdd.mockapi.io/shoe/`
            );
            setState(data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchData();
      setIsLoading(false);
   }, [listOfShoes,setIsLoading]);

   return (
      <Div>
         {state.map(({price, image, brand, id, model}) => {
            return (
               <Card
                  model={model}
                  id={id}
                  price={price}
                  image={image}
                  brand={brand}
                  key={id}
               ></Card>
            );
         })}
         {isLoading && <Spinner />}
      </Div>
   );
};

export default Shoes;
