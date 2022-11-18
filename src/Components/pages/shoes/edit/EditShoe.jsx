import React from "react";
import "./edit.css";
import styled from "styled-components";
const Div = styled.div`
   width: 100%;
   height: 100vh;
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
   height: 50%;
   background: rgba(255, 255, 255, 0.7);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   z-index: 3;
   /* filter: blur(8px); */
`;
const EditShoe = ({setShow}) => {
   const cancel = () => {
      setShow(prev=>!prev)
   };
   return (
      <Div>
         <FormDiv>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Brand"
                  required=""
                  type="text"
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Price"
                  required=""
                  type="text"
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Image"
                  required=""
                  type="text"
               />
               <span className="input-border"></span>
            </div>
            <div className="form">
               <input
                  className="input"
                  placeholder="Shoe Description"
                  required=""
                  type="text"
               />
               <span className="input-border"></span>
            </div>
            <button onClick={cancel} className="cta">
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
            <button className="cta">
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
         </FormDiv>
      </Div>
   );
};

export default EditShoe;