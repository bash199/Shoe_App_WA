import {React, useReducer, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {reducer, setToLocalStorage} from "../utils/reducer";
import Home from "./pages/home/Home";
import Shoes from "./pages/shoes/Shoes";
import Shoe from "./pages/shoes/Shoe";
import Navbar from "./navBar/Navbar";
import Error404 from "./pages/error/Error404";
import {ACTIONS} from "../utils/reducer";
import NewShoe from "./pages/shoes/NewShoe";
function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [listOfShoes, dispatch] = useReducer(
      reducer,
      localStorage.listOfShoes ? JSON.parse(localStorage.listOfShoes) : []
   );
   useEffect(() => {
      const fetchData = async () => {
         const {data} = await axios.get(
            `https://6377843f5c477765121fffdd.mockapi.io/shoe/`
         );
         setToLocalStorage(data);
      };
      fetchData();
   }, [listOfShoes]);
   return (
      <div>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/shoes"
               element={
                  <Shoes
                     listOfShoes={listOfShoes}
                     isLoading={isLoading}
                     setIsLoading={setIsLoading}
                  />
               }
            />
            <Route
               path="/newshoe"
               element={
                  <NewShoe
                     dispatch={dispatch}
                     handleAddShoe={ACTIONS.HANDLEADD}
                     listOfShoes={listOfShoes}
                     isLoading={isLoading}
                     setIsLoading={setIsLoading}
                  />
               }
            />
            <Route
               path="/shoes/:shoeId"
               element={
                  <Shoe
                     dispatch={dispatch}
                     filterListOfTasks={ACTIONS.FILTERLISTOFTASKS}
                     changeDone={ACTIONS.CHANGEDONE}
                     listOfShoes={listOfShoes}
                     isLoading={isLoading}
                     setIsLoading={setIsLoading}
                  />
               }
            />
            <Route path="*" element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
