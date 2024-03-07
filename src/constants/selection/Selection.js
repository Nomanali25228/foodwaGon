import React from 'react'

import mark from "../../assest/Map Marker.png"
import cons from "../../assest/Icons.png"
import doller from "../../assest/Icons (1).png"
import donet from "../../assest/Icons (2).png"



import'./selection.css'

export default function Selection() {
  return (
    <div>
        <div className="work">
    <h2 className="howcolor">How does it work</h2>
    <div className="flex">
        <div className="mano">
            <img src={mark} alt="" className="marker" />
            <h2 className="loc">Select location</h2>
            <p className="choose">Choose the location where your
                food will be delivered.
            </p>
        </div>

        <div className="png">
            <img src={cons} alt="" className="ord" />
            <h2 className="order">Choose order</h2>
            <p className="check">Check over hundreds of menus to pick your favorite food </p>
        </div>

        <div className="png">
            <img src={doller} alt="" className="ord" />
            <h2 className="order">Pay advanced</h2>
            <p className="checks">It's quick, safe, and simple.
                several methods of payment</p>
        </div>

        <div className="png">
            <img src={donet} alt="" className="ord" />
            <h2 className="meal">Enjoy meals</h2>
            <p className="made">Food is made and delivered directly</p>
            <p className="yanks">to your home.</p>
        </div>
  </div>
</div>
</div>
  )
}
