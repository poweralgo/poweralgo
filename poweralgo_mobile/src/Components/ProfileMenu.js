import React from 'react'

export default function ProfileMenu(props) {
  return (
    
    <div className="container full subpage over">
        <div className="section">
            <ul className="subpages collection">    
                <li className="collection-item">
                    <a href="#!" className="waves-effect" onClick={props.wallet}><i className="mdi mdi-credit-card"></i><span>Wallet (ALGO)</span><i className="arrow mdi mdi-chevron-right"></i></a>
                </li><li className="collection-item">
                    <a href="#!" className="waves-effect"><i className="mdi mdi-alphabetical "></i><span>Language</span><i className="arrow mdi mdi-chevron-right"></i></a>
                </li><li className="collection-item">
                    <a href="#!" className="waves-effect" onClick={props.meter}><i className="mdi mdi-speedometer "></i><span>Smart Meter</span><i className="arrow mdi mdi-chevron-right"></i></a>
                </li><li className="collection-item">
                    <a href="#!" className="waves-effect"><i className="mdi mdi-comment-question-outline "></i><span>FAQ</span><i className="arrow mdi mdi-chevron-right"></i></a>
            </li>
        </ul>
        </div>
    </div>
  )
}
