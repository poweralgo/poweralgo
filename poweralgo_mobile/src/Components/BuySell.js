import React from 'react'

export default function BuySell(props) {
  return (
    <div>
        <div className="section">
            <div className="spacer"></div>
            <div className='col s12 pad-0'>
                <a className={ props.buyColors } style={{ marginRight : "10px"}} onClick={ props.buyNow } href="#">Buy</a>
                <a className={ props.sellColors } onClick={ props.sellNow } href="#">Sell</a>
            </div>
        </div>
    </div>
  )
}
