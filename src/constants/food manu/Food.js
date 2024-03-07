import React from 'react'

import foodpic8 from '../../assest/Food Photo (7).png'
import foodpic9 from '../../assest/Food Photo (8).png'
import foodpic10 from '../../assest/Food Photo (9).png'
import foodpic11 from '../../assest/Food Photo (10).png'
import foodpic12 from '../../assest/Food Photo (11).png'
import foodpic13 from '../../assest/Food Photo (12).png'
import aroo1 from '../../assest/Icon (6).png'
import aroo2 from '../../assest/Slider Button.png'



import './food.css'

export default function Food() {
  return (

    <div class=" mienby">


<div class="lex">

<h2 class="sbf">Search by Food</h2>
<h2 class="alls">View All </h2>
<img src={aroo1} alt="" class="aroos"/>

<img src={aroo2} alt="" class="lr"/>


</div>

    <div>
        
        <div class="dell">

            <div class="ml">
                <img src={foodpic8} alt="" class="chees"/>
                <h2 class="za">Pizza</h2>
            </div>





            <div class="ml">
                <img src={foodpic9} alt="" class="chees"/>
                <h2 class="za">Burger</h2>
            </div>





            <div class="ml">
                <img src={foodpic10} alt="" class="chees"/>
                <h2 class="za">Noodles</h2>
            </div>


            <div class="ml">
                <img src={foodpic11}alt="" class="chees"/>
                <h2 class="su">Sub-sandiwch</h2>
            </div>


            <div class="ml">
                <img src={foodpic12} alt="" class="chees"/>
                <h2 class="sus">Chowmein</h2>
            </div>

            <div class="ml">
                <img src={foodpic13} alt="" class="chees"/>
                <h2 class="za">Steak</h2>
            </div>
        </div>

    </div>
   
    </div>

    
  )
}
