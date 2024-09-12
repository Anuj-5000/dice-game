import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';

function App() {
  const [home ,setHome]= useState(true);

 const handleHome =()=>{
      setHome(prev => !prev);
 };

  return (
     <div className="App absolute w-full h-screen bg-zinc-900">
      {
        home ? <Home handleHome={handleHome}/> : <Game  handleHome={handleHome}/>
      }
     </div>
  );
}

export default App;
