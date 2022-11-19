import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
   return (
      <nav className="menu-container">
         {/* <!-- burger menu --> */}
         <input type="checkbox" aria-label="Toggle menu" />
         <span></span>
         <span></span>
         <span></span>
         {/* <!-- logo --> */}
         <Link to="/" className="menu-logo">
            <img
               src="https://img.icons8.com/cute-clipart/64/null/shoes.png"
               alt="img"
            />
         </Link>
         {/* <!-- menu items --> */}
         <div className="menu">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/shoes">Shoes</Link>
               </li>
               <li>
                  <Link to="/newshoe">New Shoe</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
