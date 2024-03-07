import React from 'react'
import one1 from "../../assest/1 (1).png"
import one2 from "../../assest/2 (1).png"
import one3 from "../../assest/3 (1).png"

import './footer.css'

export default function Footer() {
    var todaydate = new Date
    var fullYear = todaydate.getFullYear()
    return (

        <div class="black">
            <h2 class="ours">Our  top cities</h2>
            <div class="htagptag">

                <div class="allp">
                    <p>San Francisco</p>
                    <p class="allpes">Miami</p>
                    <p class="allpes">San Diego</p>
                    <p class="allpes">East Bay</p>
                    <p class="allpes">Long Beach</p>
                </div>

                <div class="allp">
                    <p>Los Angeles</p>
                    <p class="allpes">Washington DC</p>
                    <p class="allpes">Seattle</p>
                    <p class="allpes">Portland</p>
                    <p class="allpes">Nashville</p>
                </div>

                <div class="allp">
                    <p>New York City</p>
                    <p class="allpes">Orange County</p>
                    <p class="allpes">Atlanta</p>
                    <p class="allpes">Charlotte</p>
                    <p class="allpes">Denver</p>
                </div>

                <div class="allp">
                    <p>Chicago</p>
                    <p class="allpes">Phoenix</p>
                    <p class="allpes">Las Vegas</p>
                    <p class="allpes">Sacramento</p>
                    <p class="allpes">Oklahoma City</p>
                </div>

                <div class="allp">
                    <p>Columbus</p>
                    <p class="allpes">New Mexico</p>
                    <p class="allpes">Albuquerque</p>
                    <p class="allpes">Sacramento</p>
                    <p class="allpes">New Orleans</p>
                </div>
            </div>

            <hr class="graylines" />

            <div class="parts2">
                <div>
                    <h2 class="company1">company</h2>
                    <p class="company1">About us</p>
                    <p class="company2">Team</p>
                    <p class="company2">Careers</p>
                    <p class="company2">Blog</p>
                </div>

                <div>
                    <h2 class="company1">Contact</h2>
                    <p class="company1">Help & Support</p>
                    <p class="company2">Partner with us </p>
                    <p class="company2">Ride with us</p>
                </div>

                <div>
                    <h2 class="company1">Legal</h2>
                    <p class="company1">Terms & Conditions</p>
                    <p class="company2">Refund & Cancellation</p>
                    <p class="company2">Privacy Policy</p>
                    <p class="company2">Cookie Policy</p>
                </div>

                <div class="lastparts">
                    <p>Follow Us</p>
                    <div class="imgpart">
                        <img src={one1} alt="" />
                        <img src={one2} alt="" class="im11" />
                        <img src={one3} alt="" class="im11" />
                    </div>

                    <p class="partp01">Receive exclusive offers in your mailbox</p>
                    <input type="search" name="search" placeholder=" Enter Your email" class="partinput" />
                    <button class="partbutton">
                        <h2 class="subibe">Subscribe</h2>
                    </button>
                </div>
            </div>

            <hr class="graylines" />
            <div className='yaaring'>

            </div>
            
            <p className='spaning21'>All rights Reserved &copy; <span className='spaning012'><a href="https://github.com/Nomanali25228" target='blaank'>  github/Name</a>{fullYear}</span></p>

        </div>

    )
}
