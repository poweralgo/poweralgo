import React from 'react'
import { useEffect, useState } from 'react';


export default function History() {
    const [buy, setBuy] = useState(false)
    const [sell, setSell] = useState(false);
    const [orderList, setOrderList] = useState(true)
    const [buyColors, setBuyColors] = useState('teal lighten-2 white-text')
    const [sellColors, setSellColors] = useState('orange white-text')

    const buyNow = () => {
        setBuy(true);
        setSell(false);
        setOrderList(false);
    }
    const sellNow = () => {
        setBuy(false);
        setSell(true);
        setOrderList(false);
    }
    const orderListNow = () => {
        setBuy(false);
        setSell(false);
        setOrderList(true);
    } 
  return (
    <div>
        <div className="content-area">
            <div className="pagehead-bg primary-bg" ></div> 
        
            <div className="container has-pagehead is-pagetitle">
            <div className="section">
                <h5 className="pagetitle">History</h5>
                    </div>
            </div>

            <div className="container over">
                <div className="section">
                    <ul class="collection friends contacts transparent  " >
                        <li class="collection-item avatar  ">

                            <a href="#!" class='chatlink waves-effect'>    
                            <span class="title">Consumer</span>
                            <p>0.1 Algo/kW</p>
                            </a>            
                            <div class="secondary-content">
                                <a href="#!" class='chatlink waves-effect'>    
                                <span class="title">23kW</span>
                                <p>25 Algo/kW</p>
                                </a>
                            </div>
                        </li>

                        <li class="collection-item avatar  ">

                            <a href="#!" class='chatlink waves-effect'>    
                            <span class="title">Grid</span>
                            <p>0.1 Algo/kW</p>
                            </a>            
                            <div class="secondary-content">
                                <a href="#!" class='chatlink waves-effect'>    
                                <span class="title">23kW</span>
                                <p>25 Algo/kW</p>
                                </a>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
  )
}
