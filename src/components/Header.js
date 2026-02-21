import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [name,setName] = useState("login");
    const changename = (name) =>{
        (name === "login")?setName("logout"):setName("login");
    }

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src={LOGO_URL} alt="Logo"/>
            </div>
            <div className="nav-items">  
                <ul>
                    <li>Online Status:{onlineStatus?"Active":"Offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() =>{changename(name)}}>{name}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
