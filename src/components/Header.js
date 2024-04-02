import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { CART } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
        const [isBtnName, setIsBtnName] = useState("LogIn");
        const onlineStatus = useOnlineStatus();

        //Subscribing to the store using selector
        const cartItems = useSelector((store) => store.cart.items);
      
    return (
        <div className="flex justify-between bg-black shadow-lg shadow-gray-400 rounded-lg border border-solid border-yellow-500">
            <div className="logo-container">
                <Link to="/"><img className="w-56 rounded-lg" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center text-yellow-400">
                <ul className="flex p-4 m-4">
                    <li className="px-4  hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4  hover:text-white">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4  hover:text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4  hover:text-white">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/cart">
                        <img className="w-8" src={CART}/> ({cartItems.length})
                    </Link>
                    </li>
                    <li className="px-4  hover:text-white">
                        Online : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4  hover:text-white">
                    <button className="login" onClick={() => {
                        isBtnName === "LogIn" ? setIsBtnName("LogOut") : setIsBtnName("LogIn");
                }}>{isBtnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;