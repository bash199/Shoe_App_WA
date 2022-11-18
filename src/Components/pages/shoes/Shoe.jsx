import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import EditShoe from "./edit/EditShoe";
const ShoeBox = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;
const ShoeDiv = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;
const Img = styled.img`
   width: 50%;
   height: 70%;
`;
const ShoeAbout = styled.div`
   width: 30%;
   height: 70%;
   text-align: start;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;
const BtnsDiv = styled.div``;
const Btn = styled.button``;
const H5 = styled.h1`
   margin: 2px;
   font-size: 2rem;
   color: #333;
`;
const H6 = styled.h1`
   margin: 2px;
   font-size: 1.5rem;
   color: #333;
`;
const Para = styled.p`
   margin: 2px;
   font-weight: 500;
   font-size: 1.2rem;
   color: #333;
`;
const DescDiv = styled.div`
   width: 80%;
   text-align: start;
`;

const Shoe = ({dispatch, filterListOfTasks}) => {
   const [state, setState] = useState("");
   const [brand, setBrand] = useState("");
   const [price, setPrice] = useState("");
   const [image, setImage] = useState("");
   const [size, setSize] = useState("");
   const [show, setShow] = useState(false);

   const {shoeId} = useParams();
   useEffect(() => {
      const fetchData = async () => {
         try {
            const {data} = await axios.get(
               `https://6377843f5c477765121fffdd.mockapi.io/shoe/${shoeId}`
            );
            console.log(data);
            setState(data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchData();
   }, []);

   const handleDelete = async () => {
      try {
         const {data} = await axios.delete(
            `https://6377843f5c477765121fffdd.mockapi.io/shoe/${shoeId}`
         );
         dispatch({type: filterListOfTasks, id: data.id});
      } catch (err) {
         console.log(err.message);
      }
   };
   
   return (
      <ShoeBox>
         <ShoeDiv>
            <ShoeAbout>
               <div>
                  <H5>{state.brand}</H5>
                  <Para>Price: {Math.floor(state.price)}</Para>
                  <Para>{state.size}</Para>
               </div>
               <BtnsDiv>
                  <button onClick={()=>{
                    setShow(true)
                  }} className="cta">
                     <span className="hover-underline-animation"> EDIT </span>
                     <svg
                        className="arrow"
                        viewBox="0 0 46 16"
                        height="10"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal"
                     >
                        <path
                           transform="translate(30)"
                           d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                           data-name="Path 10"
                           id="Path_10"
                        ></path>
                     </svg>
                  </button>
                  <button className="cta">
                     <Link to={"/shoes"} onClick={handleDelete}>
                        <span className="hover-underline-animation">
                           DELETE
                        </span>
                        <svg
                           className="arrow"
                           viewBox="0 0 46 16"
                           height="10"
                           width="30"
                           xmlns="http://www.w3.org/2000/svg"
                           id="arrow-horizontal"
                        >
                           <path
                              transform="translate(30)"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              data-name="Path 10"
                              id="Path_10"
                           ></path>
                        </svg>
                     </Link>
                  </button>
               </BtnsDiv>
            </ShoeAbout>
            <Img src={state.image} />
         </ShoeDiv>
         <DescDiv>
            <H6>Description:</H6>
            <Para>{state.decription}</Para>
         </DescDiv>
         {show && <EditShoe setShow={setShow}/>}
      </ShoeBox>
   );
};

export default Shoe;
