import {React, useState, useReducer,useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import { reducer,setToLocalStorage } from "../utils/reducer";
import Home from "./pages/home/Home";
import Shoes from "./pages/shoes/Shoes";
import Shoe from "./pages/shoes/Shoe";
import Navbar from "./navBar/Navbar";
import Error404 from "./pages/error/Error404";
import { ACTIONS } from "../utils/reducer";
function App() {
  const [listOfShoes, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.listOfShoes) ?? []
 );
 useEffect(() => {
  const fetchData = async () => {
     const {data} = await axios.get(
        `https://6377843f5c477765121fffdd.mockapi.io/shoe/`
     );
     console.log(data);
     setToLocalStorage(data)
  };
  fetchData();
}, [listOfShoes]);
   return (
      <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes listOfShoes={listOfShoes}/>} />
            <Route path="/shoes/:shoeId" element={<Shoe dispatch={dispatch} filterListOfTasks={ACTIONS.FILTERLISTOFTASKS}/>} />
            <Route path="*" element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
