
import './App.css';
import { useEffect, useState } from 'react';
import Landing from './Landing';
import Home from './Home';
import Market from './Components/Market';


function App() {

  const [splash, setSplash] = useState(true);


  

  const getStarted = () => {
   setSplash(false)
  }

  return (
    <div className="menu-full isfullscreen html">
      { splash? <Landing getStarted={ getStarted}/> : <Home/> }
    </div>
  );
}

export default App;
