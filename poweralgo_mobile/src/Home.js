import React from 'react'
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import UserArea from './Components/UserArea';

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false)
    const logIn = () => {
        setLoggedIn(true)
    }
  return (
    <div>
        { !loggedIn ? <Login logIn={logIn}/> : <UserArea/> }
    </div>
  )
}

