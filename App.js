import React, {useState, useEffect} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Homepage from "./Homepage";
import Error from "./Error";
import Speciproduct from "./Speciproduct";
import Navbar from "./Navbar";
import productsStore from "./store";
const App = () => {
   const [store, setStore] = useState(productsStore);
   return (
      <div>
         <Navbar></Navbar>
         <center>
            <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/products" element={<Products />} />
               <Route
                  path="/products/:productId"
                  element={<Speciproduct store={store} />}
               />
               <Route path="*" element={<Error />} />
            </Routes>
         </center>
      </div>
   );
};

export default App;
