import React from "react";
import styled from "styled-components";
import "./card.css";
import {Link, Route, Routes} from "react-router-dom";
const CardBox = styled.div`
   width: 300px;
   height: 500px;
   border: solid balck 2px;
   margin: 5px;
   padding: 7px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #e0e0e0e7;
   box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
   border-radius: 3px;
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
`;
const AboutShoeBox = styled.div`
   width: 100%;
   height: 30%;
   text-align: start;
`;
const H5 = styled.h5`
   margin: 2px;
   font-size: 1rem;
   color: #b02d2da1;
`;
const Para = styled.p`
   margin: 2px;
   font-weight: 500;
   color: #b02d2da1;
`;

const Card = ({brand, image, price, id, model}) => {
   return (
      <CardBox>
         <Image src={image} />
         <AboutShoeBox>
            <H5>{brand}</H5>
            <Para>{model}</Para>
            <Para>${price}</Para>
         </AboutShoeBox>
         <Link to={`/shoes/${id}`}>
            <button className="cta">
               <span className="hover-underline-animation"> More Details </span>
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
         </Link>
      </CardBox>
   );
};

export default Card;
