import React from 'react'
import special1 from '../../assest/Right.png'
import aroos from '../../assest/Icon (5).png'
import special2 from '../../assest/Right (1).png'
import special3 from '../../assest/Right (2).png'


import './special.css'

export default function Special() {
    return (
<div>
    <div class="patloo">
                <div class="rightimage">
                    <div class="best">
                        <h2>Best deals <span class="Crispy"> Crispy Sandwiches</span></h2>
                    </div>
                    <div class="Enjoy">
                        <p>Enjoy the large size of sandwiches. Complete
                            perfect slice of sandwiches.</p>
                        <button class="orders">
                            <h2 class="over45">Proceed to order</h2>
                            <img src={aroos}alt="" class="arooes"/>
                        </button>
                    </div>
                </div>
                <img src={special1}alt="" class="Right01"/>
            </div>

    <div class="patloo">
                <img src={special2} alt="" class="Right0124"/>
                    <div class="rightimage">
                        <div class="bestes">
                            <h2>Celebrate parties <br/> with
                                <span class="Crispy"> Fried Chicken</span>
                            </h2>
                        </div>
                        <div class="Enjoy">
                            <p>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                                <br/> best deals for fried chicken.
                            </p>
                            <button class="orders">
                                <h2 class="over45">Proceed to order</h2>
                                <img src={aroos}alt="" class="arooes"/>
                            </button>
                        </div>
                    </div>
            </div>

    <div class="patloo">
                <div class="rightimage">
                    <div class="best">
                        <h2>Wanna eat hot <br/>& spicy <span class="Crispy">Pizza?</span></h2>
                    </div>
                    <div class="Enjoy">
                        <p>Pair up with a friend and enjoy the <br/>
                            hot and crispy pizza pops. Try <br/> it
                                with the best deals.</p>
                            <button class="orders">
                                <h2 class="over45">Proceed to order</h2>
                                <img src={aroos} alt="" class="arooes"/>
                            </button>
                        </div>
                    </div>
                    <img src={special3} alt="" class="Right01"/>
                </div>
</div>
            )
}
