import React from 'react'
import Meter from './Meter';
import ProfileMenu from './ProfileMenu'
import { useState } from 'react';

export default function Profile(props) {
    
  return (
        <div className="content-area">
                
            <div className="ui-profile">
                
            <div className="primg">
            </div>
            <div className="prinfo card-panel">
                <div className="prname">
                    <h4 className="name">Lizzie Doug</h4>
                    <div className="pos">Fashion Designer</div>
                    <p>A design goal may range from solving the least significant individual goals.</p>              
                </div>
            </div>
            </div>

           <ProfileMenu meter={props.meter} wallet={props.wallet}/> 
    
        </div>

   
  )
}
