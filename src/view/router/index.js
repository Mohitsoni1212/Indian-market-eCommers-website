import { Route, Routes } from "react-router-dom";
import Home from '../screen/Home'
import Product from "../screen/Product";
import About from "../screen/About";
import Login from "../screen/Login";
import Register from "../screen/Register";
import Detail from "../screen/Detail";
import DuoFashion from "../screen/DuoFashion";
import Payment from "../screen/payment";

import '../style/style.css'
import kidsSection from "../screen/KidSection";
import accessoryzone from "../screen/AccessoryZone";

import { useEffect, useState } from "react";
import Logout from "../screen/logout";
import AddToCart from "../screen/Addtocart";
function RouterNav() {

    const [userData, setUserData] = useState('')
    useEffect(()=>{
        setUserData(localStorage.getItem('user'));
        localStorage.clear()
    },[])
    console.log(userData);

    return (
        <Routes>
            <Route path="/product" Component={Product} />
            <Route path="/about" Component={About} />
            <Route path="/register" Component={Register} />
            <Route path="/details" Component={Detail} />
            <Route path="/duofashionensembles" Component={DuoFashion} />
            <Route path="/addtocart" Component={AddToCart} />
            <Route path="/kids" Component={kidsSection} />
            <Route path="/accessoryZone" Component={accessoryzone} />
            <Route path="/logout" Component={Logout} />
             <Route  path="/payment" Component={Payment}/>
            { userData !== null ? <>
                <Route path="/" Component={Home} />
            </>
                :
                <>
                    <Route path="/login" Component={Login} />
                    <Route path="/" Component={Home} />
                </>
            }
        </Routes>
    )
}

export default RouterNav;