import React from 'react'
import burger from "../../assest/burger.png"
import map from "../../assest/map.png"
import Secr from "../../assest/Search.png"
import user from "../../assest/user.png"
import './header.css'



export default function Header() {
    return (
        <div className="mian">

            <img src={burger} alt="" className="burger" />

            <h2 className="food">food</h2>

            <h2 className="wagonss">waGon</h2>

            <h3 className="deliver">Deliver to:</h3>

            <img src={map} alt="" className="map" />

            <p className="cur">Current Location</p>

            <h3 className="drees">Mohammadpur Bus Stand, Dhaka</h3>

            <img src={Secr} alt="" className="ser" />

            <h3 className="se">Search Food</h3>

            <div className="border">

                <img src={user} alt="" className="user" />

                <p className="in">Login</p>

            </div>

        </div>
    )
}
