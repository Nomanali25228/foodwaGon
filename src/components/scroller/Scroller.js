import React from 'react'
import bike from "../../assest/Icon.png"
import bage from "../../assest/Icon (3).png"
import loc from "../../assest/Icon (1).png"
import serg from "../../assest/Icon (4).png"
import pizza from "../../assest/Image.png"

import './scroller.css'


export default function Scroller() {
    return (
        <div >


            <div className="paper">

                <div className="inside">
                    <div>
                        <h1 className="color">Are you starving?</h1>
                    </div>
                    <div>
                        <p className="ptag">Within a few clicks, find meals that are accessible near you</p>
                    </div>
                    <div className="secdorder">
                        <div className='ex'>
                            <div className="tredorder">
                                <img src={bike} alt="" className="bike" />
                                <h3 className="del">Delivery</h3>
                            </div>

                            <div className="bag">
                                <img src={bage} alt="" className="smal" />
                                <h3 className="pickup">Pickup</h3>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={loc} alt="" className="icons" />
                        </div>
                        <hr className="hrs" />
                        <input type="search" name="search" placeholder=" Enter Your Address " className="holder" />
                        <button className="buton">
                            <img src={serg} alt="" className="search" />
                            <h3 className="find">Find Food</h3>
                        </button>
                    </div>
                </div>
                <img src={pizza} alt="" className="pizza" />
            </div>
            
           </div> 
    )
}
