import React from 'react'
import { useEffect, useState } from 'react';
import dashboard from '../dashboard.jpg'

export default function Dashboard() {
  return (
    <div className="content-area">
        <div className="login-bg access-login"></div>

        <div className="container">
        <div className="section">
        <h3 className="bot-20 center">Dashboard</h3>

            <img src={dashboard} className="Dashboard-logo"/>
        </div>
        </div>
    </div>
    
  )
}

