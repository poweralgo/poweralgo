import React from 'react'
import { useState } from 'react'
import FooterMenu from './FooterMenu';
import Market from './Market';
import Meter from './Meter';
import Profile from './Profile';
import ProfileMenu from './ProfileMenu';
import Wallet from './Wallet';
import History from './History';
import Dashboard from './Dashboard';

export default function UserArea() {
    const [profile, setProfile] = useState(true);
    const [market, setMarket] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [meter, setMeter] = useState(false);
    const [history, setHistory] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    const showProfile = () => {
        setProfile(true);
        hideOthers('profile');
    }

    const showMarket = () => {
        setMarket(true);
        hideOthers('market')
    }

    const showMeter = () => {
        setMeter(true)
        hideOthers('meter')
    }

    const showWallet = () => {
        setWallet(true)
        hideOthers('wallet')
    }

    const showHistory = () => {
        setHistory(true);
        hideOthers('history')
    }

    const showDashboard = () => {
        setDashboard(true);
        hideOthers('dashboard')
    }

    const hideOthers = (exceptThis) => {
        if(exceptThis != 'profile')
            setProfile(false);
        if(exceptThis != 'market')
            setMarket(false);  
        if(exceptThis != 'meter')
            setMeter(false);  
        if(exceptThis != 'wallet')
            setWallet(false);    
        if(exceptThis != 'history')
            setHistory(false); 
        if(exceptThis != 'dashboard')
            setDashboard(false);   
    }
  return (
    <div>
        { profile ? <Profile meter={showMeter}  wallet={ showWallet }/>: ""}
        { market ? <Market/>: ""}
        { meter ? <Meter/>: ""}
        { wallet ? <Wallet/>: ""}
        { history ? <History/> : ""}
        { dashboard ? <Dashboard/> : ""}

        <FooterMenu market={ showMarket} dashboard={showDashboard } profile={ showProfile } history={showHistory}/>
    </div>
  )
}
