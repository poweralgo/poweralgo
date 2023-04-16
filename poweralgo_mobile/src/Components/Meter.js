import React from 'react'
import battery from '../battery.jpg'
export default function Meter() {
  return (
    <div className="content-area">
        <div className="login-bg access-login"></div>
    
        <div className="container login-area">
        <div className="section">

            <h3 className="bot-20 center">Smart Meter: S132_A1</h3>

            <div className="row center">
                <img src={battery} className="Meter-logo"/>

            </div> 
            <div className="brief center">Successfully integrated with Algorand</div>
        </div>
        </div>
    </div>
  )
}

