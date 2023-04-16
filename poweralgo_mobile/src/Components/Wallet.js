import React from 'react'
import algorand from '../algorand_big.png'
export default function Wallet() {
  return (
    <div className="content-area">
        <div className="login-bg access-login"></div>

        <div className="container login-area">
        <div className="section">

            <h3 className="bot-5 center">Wallet</h3>

            <div className="row center">
                <img src={algorand} className="Algo-logo"/>
                <h3 className="bot-5 center">24340</h3>
                <div className="brief center">current price:$20/ALGO</div>
            </div> 
            <div className="row center">
            <a class="waves-effect waves-light btn-large orange">check the wallet on the explorer</a>
            </div>
        </div>
        </div>
    </div>
  )
}

