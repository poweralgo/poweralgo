import React from 'react'
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Buy from './Buy';
import BuySell from './BuySell';
import ProsumerList from './ProsumerList';
import Sell from './Sell';

export default function Market() {
    const [buy, setBuy] = useState(false)
    const [sell, setSell] = useState(false);
    const [orderList, setOrderList] = useState(true)
    const [buyColors, setBuyColors] = useState('waves-effect waves-light btn orange')
    const [sellColors, setSellColors] = useState('waves-effect waves-light btn white dark-text')

    const buyNow = () => {
        setBuy(true);
        setSell(false);
        setOrderList(false);
        setBuyColors('waves-effect waves-light btn orange');
        setSellColors('waves-effect waves-light btn white dark-text');
    }
    const sellNow = () => {
        setBuy(false);
        setSell(true);
        setOrderList(false);
        setSellColors('waves-effect waves-light btn orange');
        setBuyColors('waves-effect waves-light btn white dark-text');
    }
    const orderListNow = () => {
        setBuy(false);
        setSell(false);
        setOrderList(true);
    } 
  return (
    <div>
        <div className="content-area">
            <div className="pagehead-bg   primary-bg" ></div> 
        
            <div className="container has-pagehead is-pagetitle">
            <div className="section">
                <h5 className="pagetitle">Market</h5>
                    </div>
            </div>

            <div className="container over">
                <BuySell buyNow={orderListNow} sellNow={sellNow} buyColors={buyColors} sellColors={sellColors}/>
                
                { orderList ? <ProsumerList buy={buy} buyNow={buyNow}/> : ""}
                { buy ? <Buy back={orderListNow}/> : ""}
                { sell ? <Sell back={orderListNow}/> : ""}
            </div>
            
        </div>
    </div>
  )
}
