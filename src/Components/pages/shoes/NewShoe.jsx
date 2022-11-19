import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";
import Spinner from "../../spinner/Spinner";
const Div = styled.div`
   width: 100%;
   height: calc(100vh + 107px);
   position: absolute;
   top: 0;
   left: 0;
   z-index: 3;
   display: flex;
   justify-content: center;
   align-items: center;
   /* filter: blur(8px); */
   /* -webkit-filter: blur(8px); */
   background: rgba(0, 0, 0, 0.8);
`;
const FormDiv = styled.div`
   width: 60%;
   height: 60%;
   background: rgba(255, 255, 255, 0.7);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   z-index: 3;
   /* filter: blur(8px); */
`;
const NewShoe = ({dispatch, handleAddShoe, isLoading, setIsLoading}) => {
   const [brandInput, setBrandInput] = useState("");
   const [modelInput, setModelInput] = useState("");
   const [priceInput, setPriceInput] = useState("");
   const [imageInput, setImageInput] = useState("");
   const [sizeInput, setSizeInput] = useState("");
   const [descriptionInput, setDescriptionInput] = useState("");

   const clearInputs = () => {
      setBrandInput("");
      setModelInput("");
      setPriceInput("");
      setImageInput("");
      setSizeInput("");
      setDescriptionInput("");
      setModelInput("");
   };

   const handleAdd = async () => {
      setIsLoading(true);
      try {
         if (
            brandInput &&
            priceInput &&
            imageInput &&
            sizeInput &&
            descriptionInput &&
            modelInput
         ) {
            const {
               data: {brand, price, image, size, description, model},
            } = await axios.post(
               "https://6377843f5c477765121fffdd.mockapi.io/shoe",
               {
                  brand: brandInput,
                  model: modelInput,
                  price: priceInput,
                  image: imageInput,
                  size: sizeInput,
                  description: descriptionInput,
               }
            );
            dispatch({
               type: handleAddShoe,
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
         }
      } catch (err) {
         console.log(err);
      }
      setIsLoading(false);
   };
   const cancel = () => {
      clearInputs();
   };
   return (
      <Div>
         <FormDiv>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Brand"
                  required="text"
                  type="text"
                  value={brandInput}
                  onChange={({target: {value}}) => setBrandInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Model"
                  required="text"
                  type="text"
                  value={modelInput}
                  onChange={({target: {value}}) => setModelInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Price"
                  required="text"
                  type="text"
                  value={priceInput}
                  onChange={({target: {value}}) => setPriceInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Image"
                  required="text"
                  type="text"
                  value={imageInput}
                  onChange={({target: {value}}) => setImageInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Size"
                  required="text"
                  type="text"
                  value={sizeInput}
                  onChange={({target: {value}}) => setSizeInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Description"
                  required="text"
                  type="text"
                  value={descriptionInput}
                  onChange={({target: {value}}) => setDescriptionInput(value)}
               />
               <span className="input-border"></span>
            </div>
            <Link to={"/shoes"}>
               <button
                  onClick={() => {
                     cancel();
                     clearInputs();
                  }}
                  className="cta"
               >
                  <span className="hover-underline-animation"> Cancel </span>
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
               <button
                  onClick={() => {
                     handleAdd();
                     cancel();
                  }}
                  className="cta"
               >
                  <span className="hover-underline-animation"> Save </span>
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
            <Link to={"/"}>
               <button className="cta">
                  <span className="hover-underline-animation"> Home </span>
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
         </FormDiv>
         {isLoading && <Spinner />}
      </Div>
   );
};

export default NewShoe;
