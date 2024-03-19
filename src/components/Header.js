import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { CART } from "../utils/constants";
import { useState } from "react";



const Header = () => {
        const [isBtnName, setIsBtnName] = useState("LogIn");
      
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link to="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link to="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li>
                        <img className="cart" src={CART} />
                    </li>
                    <button className="login" onClick={() => {
                        isBtnName === "LogIn" ? setIsBtnName("LogOut") : setIsBtnName("LogIn");
                }}>{isBtnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;