import React from "react";
import styled from "styled-components";
import img from "./Tic.png";
const Div = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const HomeDiv = styled.div`
   width: 500px;
   height: 500px;
   background-color: rgb(0, 0, 0, 0.5);
   border-radius: 10px;
   text-align: center;
`;
const TopDiv = styled.div`
   width: 100%;
   height: 10%;
   padding: 5px 0;
   background-color: rgb(0, 0, 0, 0.8);
   border-radius: 10px 10px 0 0;
`;
const H1 = styled.h1`
   color: #ffffff;
   margin: 0;
`;
const Par = styled.p`
   color: #ffffff;
   font-size: 1.4rem;
   font-weight: 400;
   margin: 10px 0;
`;
const GameDiv = styled.div`
   height: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Img = styled.img`
   width: 200px;
   height: 200px;
`;
const Home = () => {
   return (
      <Div>
         <HomeDiv>
            <TopDiv>
               <H1>Home Page</H1>
            </TopDiv>
            <div>
               <Par>
                  For passing time you are more than wellcome to play some games
               </Par>
            </div>
            <GameDiv>
               <a
                  href="https://main--spiffy-starlight-c26589.netlify.app/"
                  target="_blank"
               >
                  <Img src={img} alt="Tic Tac Toe" />
               </a>
            </GameDiv>
         </HomeDiv>
      </Div>
   );
};

export default Home;
