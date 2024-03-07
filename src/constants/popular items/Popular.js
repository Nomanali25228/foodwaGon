import React from 'react'

import arrowleft from "../../assest/Arrow Left.png"
import frame from "../../assest/Frame 40.png"
import frame1 from "../../assest/Frame 40 (1).png"
import frame2 from "../../assest/Rectangle 336.png"
import frame3 from "../../assest/Rectangle 336 (1).png"
import frame4 from "../../assest/Frame 40 (2).png"
import mip from "../../assest/map.png"
import arrowright from "../../assest/Arrow Right.png"


import './popular.css'

export default function Popular() {
  return (
    <div>
         <h1 className="popu">Popular items</h1>





<div className="pitem">


    <div>
        <img src={arrowleft} alt="" className="arrow" />
    </div>

    <div>
        <img src={frame} alt="" className="foodpic" />
        <h1 className="sizez">Cheese Burger</h1>
        <div className="mappng">
            <img src={mip} alt="" className="Photo" />
            <p className="Photos">Burger Arena</p>
        </div>

        <h1 className="price">$3.88</h1>
         <button className="button">
<h2 className="nows">Order Now</h2>
</button>
    </div>



    <div className="margin">
        <img src={frame1} alt="" className="foodpic" />
        <h1 className="sizez">Toffe’s Cake</h1>
        <div className="mappng">
            <img src={mip} alt="" className="Photo" />
            <p className="Photos">Top Sticks</p>
        </div>

        <h1 className="price">$4.00</h1>
        <button className="button">
<h2 className="nows">Order Now</h2>
</button>
    </div>



    <div className="margin">
        <img src={frame2} alt="" className="foodpic" />
        <h1 className="sizez">Dancake</h1>
        <div className="mappng">
            <img src={mip} alt="" className="Photo" />
            <p className="Photos">Cake World</p>
        </div>

        <h1 className="price">$1.99</h1>
        <button className="button">
<h2 className="nows">Order Now</h2>
</button>
    </div>


    <div className="margin">
        <img src={frame3} alt="" className="foodpic" />
        <h1 className="sizez">Crispy Sandwitch</h1>
        <div className="mappng">
            <img src={mip} alt="" className="Photo" />
            <p className="Photos">Fastfood Dine</p>
        </div>

        <h1 className="price">$3.00</h1>
        <button className="button">
<h2 className="nows">Order Now</h2>
</button>
    </div>



    <div className="margin">
        <img src={frame4} alt="" className="foodpic" />
        <h1 className="sizez">Thai Soup</h1>
        <div className="mappng">
            <img src={mip} alt="" className="Photo" />
            <p className="Photos">Foody man</p>
        </div>

        <h1 className="price">$2.79</h1>
        <button className="button">
<h2 className="nows">Order Now</h2>
</button>
    </div>

    <img src={arrowright} alt="" className="arrows" />


</div>

    </div>
  )
}
