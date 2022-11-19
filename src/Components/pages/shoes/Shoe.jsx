import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import EditShoe from "./edit/EditShoe";
import Spinner from "../../spinner/Spinner";
const ShoeBox = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   color: #b02d2da1;
`;
const ShoeDiv = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   color: #b02d2da1;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;
const Img = styled.img`
   width: 50%;
   height: 70%;
   margin: 5px;
   @media (max-width: 768px) {
      width: 85%;
   }
`;
const ShoeAbout = styled.div`
   width: 30%;
   height: 70%;
   padding: 5px;
   text-align: start;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   /* background-color:rgba(255,255,255,0.8); */
   background: #e0e0e0e7;
   box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
   border-radius: 3px;
   @media (max-width: 768px) {
      width: 80%;
      margin: 5px;
   }
`;
const BtnsDiv = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;
const H5 = styled.h1`
   margin: 2px;
   font-size: 2rem;

   color: #b02d2da1;
`;
const H6 = styled.h1`
   margin: 2px;
   font-size: 1.5rem;
   color: #b02d2da1;
`;
const Para = styled.p`
   margin: 2px;
   font-weight: 500;
   font-size: 1.2rem;
   color: #b02d2da1;
`;
const DescDiv = styled.div`
   width: 80%;
   padding: 5px;
   margin: 5px;
   text-align: start;
   background: #e0e0e0e7;
   box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
   border-radius: 3px;
`;
const Shoe = ({
   dispatch,
   filterListOfTasks,
   changeDone,
   listOfShoes,
   isLoading,
   setIsLoading,
}) => {
   const [state, setState] = useState("");
   const [brandInput, setBrandInput] = useState("");
   const [modelInput, setModelInput] = useState("");
   const [priceInput, setPriceInput] = useState("");
   const [imageInput, setImageInput] = useState("");
   const [sizeInput, setSizeInput] = useState("");
   const [descriptionInput, setDescriptionInput] = useState("");
   const [show, setShow] = useState(false);
   const {shoeId} = useParams();

   useEffect(() => {
      setIsLoading(true);
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
      setIsLoading(false);
   }, [listOfShoes, shoeId,setIsLoading]);

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

   const handleDone = async () => {
      console.log(shoeId);
      if (
         brandInput ||
         priceInput ||
         imageInput ||
         sizeInput ||
         descriptionInput ||
         modelInput
      ) {
         try {
            const {
               data: {brand, price, image, size, description, model},
            } = await axios.put(
               `https://6377843f5c477765121fffdd.mockapi.io/shoe/${shoeId}`,
               {
                  brand: brandInput ? brandInput : state.brand,
                  model: modelInput ? modelInput : state.model,
                  price: priceInput ? priceInput : state.price,
                  image: imageInput ? imageInput : state.image,
                  size: sizeInput ? sizeInput : state.size,
                  description: descriptionInput
                     ? descriptionInput
                     : state.description,
               }
            );
            dispatch({
               type: changeDone,
               payload: {
                  brand: brand,
                  price: price,
                  size: size,
                  description: description,
                  image: image,
                  model: model,
               },
            });
            clearInputs();
         } catch (err) {
            console.log(err);
         }
      }
   };

   const clearInputs = () => {
      setBrandInput("");
      setModelInput("");
      setPriceInput("");
      setImageInput("");
      setSizeInput("");
      setDescriptionInput("");
      setModelInput("");
   };

   return (
      <ShoeBox>
         <ShoeDiv>
            <ShoeAbout>
               <div>
                  <H5>{state.brand}</H5>
                  <Para>{state.model}</Para>
                  <Para>Price: ${state.price}</Para>
                  <Para>Size: {state.size}</Para>
               </div>
               <BtnsDiv>
                  <button
                     onClick={() => {
                        setShow(true);
                     }}
                     className="cta"
                  >
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
                     <Link
                        to={"/shoes"}
                        onClick={handleDelete}
                        className="link"
                     >
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
                  <button className="cta">
                     <Link to={"/shoes"} className="link">
                        <span className="hover-underline-animation">BACK</span>
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
            <Para>{state.description}</Para>
         </DescDiv>
         {show && (
            <EditShoe
               clearInputs={clearInputs}
               descriptionInput={descriptionInput}
               setDescriptionInput={setDescriptionInput}
               sizeInput={sizeInput}
               setSizeInput={setSizeInput}
               imageInput={imageInput}
               setImageInput={setImageInput}
               priceInput={priceInput}
               setPriceInput={setPriceInput}
               setBrandInput={setBrandInput}
               brandInput={brandInput}
               setShow={setShow}
               handleDone={handleDone}
               modelInput={modelInput}
               setModelInput={setModelInput}
            />
         )}
         {isLoading && <Spinner />}
      </ShoeBox>
   );
};

export default Shoe;
