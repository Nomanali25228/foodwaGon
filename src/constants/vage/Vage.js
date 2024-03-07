import React from 'react'
import bowel from "../../assest/Food Photo.png"
import bowel01 from "../../assest/Food Photo (1).png"
import bowel02 from "../../assest/Food Photo (2).png"
import bowel03 from "../../assest/Food Photo (3).png"

import './vage.css'

export default function Vage() {
    return (
        <div>
            <div className="miandiv">
                <div className="car">
                    <img src={bowel} alt="" className="nodal" />
                    <h3 className="vage">Greys Vage</h3>
                    <div className="days">
                        <h3 className="size">6 Days Remaining</h3>
                    </div>
                </div>
                <div>
                    <img src={bowel01} alt="" className="nodal" />
                    <h3 className="vage">Greys Vage</h3>
                    <div className="days">
                        <h3 className="size">6 Days Remaining</h3>
                    </div>
                </div>
                <div>
                    <img src={bowel02} alt="" className="nodal" />
                    <h3 className="vage">Greys Vage</h3>
                    <div className="days">
                        <h3 className="size">7 Days Remaining</h3>
                    </div>
                </div>
                <div>
                    <img src={bowel03} alt="" className="nodal" />
                    <h3 className="vage">Greys Vage</h3>

                    <div className="days">
                        <h3 className="size">8 Days Remaining</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
