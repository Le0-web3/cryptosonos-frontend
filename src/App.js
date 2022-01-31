import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Groovebox from './Components/Groovebox/Groovebox.js';
import Soundsystem from './Components/Soundsystem/Soundsystem.js';
import Navbar from './Components/Navbar/Navbar.js';

const App = () => {

  // USE STATE
  const [view, setView] = useState("home");
  const [mood, setMood] = useState("tekno");
  const [bpm, setBpm] = useState(120); 
  const [sequence, setSequence] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [builded, setBuilded] = useState({
    top: {
        tekno: 0,
        dub: 0,
        jungle: 0
    },
    mid : {
        tekno: 0,
        dub: 0,
        jungle: 0  
    },
    kick : {
        tekno: 0,
        dub: 0,
        jungle: 0  
    },
    sub : {
        tekno: 0,
        dub: 0,
        jungle: 0  
    }
  });
  const [sequenceRating, setSequenceRating] = useState(0);

  //   -----   USE EFFFECT   -----

  // STATE FUNCTIONS
    // navigation
  const handleClickView = (event) => {
    setView(event.target.id.slice(0, -4));
  }

  // RENDER
  const renderContent = () => {
    if (view === "home") {
      return <Home handleClickView={handleClickView}
      mood={mood}
      setMood={setMood}
      bpm={bpm}
      setBpm={setBpm}
      sequence={sequence}
      setSequence={setSequence}
      builded={builded}
      setBuilded={setBuilded}
      sequenceRating={sequenceRating}
      setSequenceRating={setSequenceRating}
      />;
    }
    else if(view === "groovebox") {
      return <Groovebox 
      mood={mood}
      setMood={setMood}
      bpm={bpm}
      setBpm={setBpm}
      sequence={sequence}
      setSequence={setSequence}
      rating={sequenceRating}
      setRating={setSequenceRating}
      view={view}
      />;
    }
    else if(view === "soundsystem") {
      return <Soundsystem
      builded={builded}
      setBuilded={setBuilded}
       />;
    }
  } // rendercontent




  return (
  <div>
    <Navbar handleClickView={handleClickView} />
    <div id="content">
      {renderContent()}
    </div>
  </div>
  )

} // App

export default App;
