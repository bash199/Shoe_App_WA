import React from "react";
import "./spinner.css";
const Spinner = () => {
   return (
      <div className="cssload-container">
         <div className="cssload-lt"></div>
         <div className="cssload-rt"></div>
         <div className="cssload-lb"></div>
         <div className="cssload-rb"></div>
      </div>
   );
};

export default Spinner;
