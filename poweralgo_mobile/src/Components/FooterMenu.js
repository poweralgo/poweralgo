import React from 'react'

export default function FooterMenu(props) {
  return (
    <div className="footer-menu circular">
        <ul>
            <li>
                <a href="#!" onClick={props.dashboard} style={{color: "black"}}>      
                <i className="mdi mdi-home"></i>
                <span style={{color: "black"}}>Home</span>
                </a>    
            </li>
            <li>
                <a href="#!"  onClick={props.market} style={{color: "black"}}>      
                <i className="mdi mdi-library-books"></i>
                <span style={{color: "black"}}>Orders</span>
                </a>    
            </li>
            <li>
                <a href="#" onClick={props.market} style={{color: "black"}}>      
                <i className="mdi mdi-recycle"></i>
                <span style={{color: "black"}}>Market</span>
                </a>    
            </li>
            <li>
                <a href="#!" onClick={props.history} style={{color: "black"}}>      
                <i className="mdi mdi-history"></i>
                <span style={{color: "black"}}>History</span>
                </a>    
            </li>
            <li>
                <a href="#" onClick={props.profile} style={{color: "black"}}>      
                <i className="mdi mdi-account"></i>
                <span style={{color: "black"}}>Profile</span>
                </a>    
            </li>
            
        </ul>
        </div>
  )
}
