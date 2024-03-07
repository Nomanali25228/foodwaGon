import React from 'react'

import foodspic from '../../assest/Food Photo.png'
import RestaruantLogo from '../../assest/Restaruant Logo.png'
import starPic from '../../assest/Icon (2).png'
import RestaruantLogo2 from '../../assest/Restaruant Logo (1).png'
import foodspic2 from '../../assest/Food Photo (2).png'
import RestaruantLogo3 from '../../assest/Restaruant Logo (2).png'
import foodspic3 from '../../assest/Food Photo (1).png'
import RestaruantLogo4 from '../../assest/Restaruant Logo (3).png'
import foodspic04 from '../../assest/Food Photo (3).png'
import foodspic05 from '../../assest/Food Photo (4).png'
import foodspic06 from '../../assest/Food Photo (5).png'
import foodspic07 from '../../assest/Food Photo (6).png'
import RestaruantLogo5 from '../../assest/Image (1).png'
import arroPic from '../../assest/Icon (5).png'

import './featured.css'

export default function Featured() {
  return (
    <div>
        
    <h1 class="popu">Featured Restaurants</h1>


    <div class="dis">
<div class="chop">
    <div>
        <img src={foodspic} alt="" class="aull"/>
    </div>

    <div class="bull">

        <img src={RestaruantLogo} alt="" class="cull"/>
        <h2 class="fw">Foodworld</h2>
        <div>
            <img src={starPic} alt="" class="star"/>
            <h2 class="four">46</h2>
        </div>
    </div>
    <div class="open">
        <h2 class="tomor">Opens tomorrow</h2>
    </div>
</div>
<div class="chops">
    <div>
        <img src={foodspic} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo2} alt="" class="cull"/>
        <h2 class="fw">Pizzahub</h2>
        <div>
            <img src={starPic} alt="" class="stars"/>
            <h2 class="fours">40</h2>
        </div>
    </div>
    <div class="open">
        <h2 class="tomor">Opens tomorrow</h2>
    </div>
</div>

<div class="chops">
    <div>
        <img src={foodspic2} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo3} alt="" class="cull"/>
        <h2 class="fw">Donuts hut</h2>
        <div>
            <img src={starPic} alt="" class="starone"/>
           <h2 class="fourone">20</h2>
        </div>
    </div>
    <div class="ot">
        <h2 class="rgba">Open Now</h2>
    </div>
</div>
<div class="chops">
    <div>
        <img src={foodspic3} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo4} alt="" class="cull"/>
        <h2 class="fw">Donuts hut</h2>
        <div>
            <img src={starPic} alt="" class="startwo"/>
            <h2 class="fourtwo">50</h2>
        </div>
    </div>
    <div class="ot">
       <h2 class="rgba">Open Now</h2>
    </div>
</div>
</div>




<div class="dis">
<div class="chop">
    <div>
        <img src={foodspic04} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo} alt="" class="cull"/>
        <h2 class="fw">Ruby Tuesday</h2>
        <div>
            <img src={starPic} alt="" class="star"/>
            <h2 class="four">26</h2>
        </div>
    </div>
   <div class="green">
        <h2 class="greens">Open Now</h2>
    </div>
</div>
<div class="chops">
    <div>
        <img src={foodspic05} alt="" class="aull"/>
    </div>
    <div class="bull">
    <img src={RestaruantLogo2} alt="" class="cull"/>
        <h2 class="fw">Kuakata Fried Chicken</h2>
        <div>
            <img src={starPic} alt="" class="stars"/>
            <h2 class="fours">53</h2>
        </div>
    </div>
    <div class="green">
        <h2 class="greens">Open Now</h2>
    </div>
</div>
<div class="chops">
    <div>
        <img src={foodspic06} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo3} alt="" class="cull"/>
        <h2 class="fw">Red Square</h2>
        <div>
            <img src={starPic} alt="" class="starone"/>
            <h2 class="fourone">45</h2>
        </div>
   </div>
    <div class="ot">
        <h2 class="rgbas">Open Now</h2>
    </div>
</div>

<div class="chops">
    <div>
        <img src={foodspic07} alt="" class="aull"/>
    </div>
    <div class="bull">
        <img src={RestaruantLogo5}alt="" class="cull"/>
        <h2 class="fw">Taco Bell</h2>
        <div>
            <img src={starPic} alt="" class="startwo"/>
            <h2 class="fourtwo">35</h2>
        </div>
    </div>
    <div class="ot">
        <h2 class="rgbas">Open Now</h2>
    </div>
</div>
</div>
<div class="view">
<h2 class="all">View All </h2>
<img src={arroPic} alt="" class="aroo"/>
</div>
    </div>
  )
}
