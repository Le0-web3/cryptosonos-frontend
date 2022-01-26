import React, { useEffect, useState } from 'react';
import './Groovebox.css';
import Switch from './Switch';
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import * as Tone from 'tone';

// ----- GLOBAL AND CONSTANT -----

const vol01 = new Tone.Volume().toDestination();
const vol02 = new Tone.Volume().toDestination();
const vol03 = new Tone.Volume().toDestination();
const vol04 = new Tone.Volume().toDestination();
const vol05 = new Tone.Volume().toDestination();
const vol06 = new Tone.Volume().toDestination();
const vol07 = new Tone.Volume().toDestination();
const vol08 = new Tone.Volume().toDestination();
const volumeNode = [vol01, vol02, vol03, vol04, vol05, vol06, vol07, vol08];

var tekno01 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno01.mp3").connect(vol01);
var tekno02 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno03.mp3").connect(vol02);
var tekno03 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno06.mp3").connect(vol03);
var tekno04 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno07.mp3").connect(vol04);
var tekno05 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno02.mp3").connect(vol05);
var tekno06 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno04.mp3").connect(vol06);
var tekno07 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno05.mp3").connect(vol07);
var tekno08 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/tekno08.mp3").connect(vol08);
var playerstekno = [tekno01, tekno02, tekno03, tekno04, tekno05, tekno06, tekno07, tekno08];

var dub01 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub01.mp3").connect(vol01);
var dub02 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub04.mp3").connect(vol02);
var dub03 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub06.mp3").connect(vol03);
var dub04 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub08.mp3").connect(vol04);
var dub05 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub02.mp3").connect(vol05);
var dub06 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub05.mp3").connect(vol06);
var dub07 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub03.mp3").connect(vol07);
var dub08 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/18443d138626512b1a06aeb1d043ee4510e529da/public/samples/dub07.mp3").connect(vol08);
var playersdub = [dub01, dub02, dub03, dub04, dub05, dub06, dub07, dub08];

var jungle01 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle01.mp3").connect(vol01);
var jungle02 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle02.mp3").connect(vol02);
var jungle03 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle03.mp3").connect(vol03);
var jungle04 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle04.mp3").connect(vol04);
var jungle05 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle05.mp3").connect(vol05);
var jungle06 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle06.mp3").connect(vol06);
var jungle07 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle07.mp3").connect(vol07);
var jungle08 = new Tone.Player("https://raw.githubusercontent.com/luckyclutcher/cryptosonos-frontend/bf08184626454ac0020c7c126d88ae7443e1cd9b/public/samples/jungle08.mp3").connect(vol08);
var playersjungle = [jungle01, jungle02, jungle03, jungle04, jungle05, jungle06, jungle07, jungle08];

var players = playerstekno;

var namestekno = ["kick 1", "jump", "hat", "crash", "kick 2", "pump 1", "pump 2", "rim"];
var namesdub = ["kick", "rim", "guitar", "crash", "snare", "woodblock", "hat", "synare"];
var namesjungle = ["kick", "rim 1", "snare 1", "roll 1", "roll 2", "hat", "snare 2", "rim 2"];

const moodArray = ["tekno", "dub", "jungle"];

let PlayStopButton;
let RatingStars;

var beatvar = 0;

const Groovebox = (props) => {

// -----   USE STATE   -----
const [started, setStarted] = useState(false);
const [isOn, setIsOn] = useState(false);
const [beat, setBeat] = useState(0);
const [display, setDisplay] = useState("click to start");
const [names, setNames] = useState(namestekno);

// -----   USE EFFECT   -----
/*     players     */
useEffect(() => {
    if(props.mood == "tekno") {
      players = playerstekno;
    } else if(props.mood == "dub") {
      players = playersdub;
    } else if(props.mood == "jungle") {
      players = playersjungle;
    }
/*    props.setVolume({1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1});
    for(let i = 0; i<players.length; i++) {
      players[i].volume.value = 1;
    } 
    */
  }, [props.mood] )

/*     names     */
useEffect(() => {
  if(props.mood == "tekno") {
    setNames(namestekno);
  } else if(props.mood == "dub") {
    setNames(namesdub);
  } else if(props.mood == "jungle") {
    setNames(namesjungle);
  }
}, [props.mood] )

  /*     PlayStopButton     */
  useEffect(() => {
    if (!isOn) {PlayStopButton = <FaPlay onClick={startStop} className="icon" /> }
    else {PlayStopButton = <FaStop onClick={startStop} className="icon" /> }
  }, [isOn])

  /*     setDisplay     */
  useEffect(() => {
    if (isOn) {setDisplay(beat+1)}
    else {setDisplay("Click to Start !")}
  }, [beat])


  /*     Themes     */
  useEffect(() => {
    if(props.mood == "tekno") {
      document.documentElement.style.setProperty('--color1', '#000000');
      document.documentElement.style.setProperty('--color2', '#323232');
      document.documentElement.style.setProperty('--color3', '#FF1E56');
      document.documentElement.style.setProperty('--color4', '#FFAC41');
      document.documentElement.style.setProperty('--color5', '#575757');
    } else if(props.mood == "dub") {
      document.documentElement.style.setProperty('--color1', '#000000');
      document.documentElement.style.setProperty('--color2', '#123e01');
      document.documentElement.style.setProperty('--color3', '#fae409');
      document.documentElement.style.setProperty('--color4', '#d4291d');
      document.documentElement.style.setProperty('--color5', '#185302');
    } else if(props.mood == "jungle") {
      document.documentElement.style.setProperty('--color1', '#000000');
      document.documentElement.style.setProperty('--color2', '#0a2b1b');
      document.documentElement.style.setProperty('--color3', '#8f9b45');
      document.documentElement.style.setProperty('--color4', '#dfd97f');
      document.documentElement.style.setProperty('--color5', '#445f38');
    }
  }, [props.mood] )

  /*     setBeat     */
  useEffect(() => {
    setBeat(0);
    beatvar = 0;
  }, [isOn] )

  /*
  /*     Rate sequence     
  useEffect(() => {
    rateSequence();
  }, [props.sequence] )
  */

  /*     Rating     */
  useEffect(() => {
    let currentRating = rateSequence();
    if (currentRating == 0) {
      RatingStars = 
      <div>
        <FaStar className='starOff' />
        <FaStar className='starOff' />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 1) {
      RatingStars = 
      <div>
        <FaStar />
        <FaStar className='starOff' />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 2) {
      RatingStars = 
      <div>
        <FaStar />
        <FaStar />
        <FaStar className='starOff' /> 
      </div>
      }
    else if(currentRating == 3) {
      RatingStars = 
      <div>
        <FaStar />
        <FaStar />
        <FaStar /> 
      </div>
      }
    
  }, [props.sequence, props.bpm])

// -----   SET STATE METHODS   -----

/*     StartStop     */
const startStop = () => {
     if(isOn) {
       Tone.Transport.stop();
       setIsOn(false);
     } else { // if was off
       if(!started) {
         Tone.start();
         configLoop();
         setStarted(true);
       }
       setIsOn(true);
       Tone.Transport.start();
     }
   };

/*     BPM     */
const handleBpmChange = (event) => {
    props.setBpm(event.target.value) // just for rerender
    Tone.Transport.bpm.value = event.target.value;
  }

/*     set Mood     */
const handleIncrementMood = () => {
    if(moodArray.indexOf(props.mood) < moodArray.length - 1) {
      props.setMood(moodArray[moodArray.indexOf(props.mood) + 1])
    } else {
      props.setMood(moodArray[0])
    }
  }
const handleDecrementMood = () => {
    if(moodArray.indexOf(props.mood) > 0) {
      props.setMood(moodArray[moodArray.indexOf(props.mood) - 1])
    } else {
      props.setMood(moodArray[moodArray.length - 1])
    }
  }

/*     Set sequence    */
const handleSequence = (i, s) => {
    const instIndex = i;
    const step = s;
    let newArr = [...props.sequence];
    if(newArr[instIndex][step] == 0) {
      newArr[instIndex][step] = 1;
    } 
    else if(newArr[instIndex][step] == 1) {
      newArr[instIndex][step] = 0;
    }
    props.setSequence(newArr);
  }
/*     Handle Volume change     */
const handleVolumeChange = e => {
  const { name, value } = e.target;
  volumeNode[name].volume.value = value;
};

/*     Rate sequence     */
const rateSequence = () => {
  let rate = 0;
  if(props.mood == "tekno") {
    if(props.bpm <= 220 && props.bpm >= 100 && props.sequence[0][0] + props.sequence[0][4] + props.sequence[0][8] + props.sequence[0][12]  == 4 || props.sequence[4][0] + props.sequence[4][4] + props.sequence[4][8] + props.sequence[4][12]  == 4) {
      rate = 1;
    }
    if(rate == 1 && props.sequence[5][0] + props.sequence[5][4] + props.sequence[5][8] + props.sequence[5][12]  == 4 || props.sequence[6][0] + props.sequence[6][4] + props.sequence[6][8] + props.sequence[6][12]  == 4) {
      rate = 2;
    }
    if(rate > 0 && props.sequence[7][4] + props.sequence[7][12] == 2) {
      rate += 1;
    }
  } // if tekno
  if(props.mood == "dub") {
    if(props.bpm <= 160 && props.bpm >= 90 && props.sequence[0][0] == 1) {
      rate = 1;
    }
    if(rate == 1 && props.sequence[4][8]  == 1) {
      rate = 2;
    }
    if(rate > 0 && sumArray(props.sequence[6]) > 3) {
      rate += 1;
    }
  } // if dub
  if(props.mood == "jungle") {
    if(props.bpm <= 200 && props.bpm >= 160 && props.sequence[0][0] + props.sequence[0][10] == 2 && props.sequence[2][4] + props.sequence[2][12] + props.sequence[6][4] + props.sequence[6][12] > 1) {
      rate = 1;
    }
    if(rate == 1 && sumArray(props.sequence[4]) + sumArray(props.sequence[5]) > 1) {
      rate = 2;
    }
    if(sumArray(props.sequence[0]) + sumArray(props.sequence[1]) + sumArray(props.sequence[2]) + sumArray(props.sequence[3]) + sumArray(props.sequence[4]) + sumArray(props.sequence[5]) + sumArray(props.sequence[6]) + sumArray(props.sequence[7]) == 8 && props.sequence[0][0] + props.sequence[1][2] + props.sequence[2][4] + props.sequence[3][6] + props.sequence[4][8] + props.sequence[5][10] + props.sequence[6][12] + props.sequence[7][14] == 8) {
      rate = 3;
    }
  } // if jungle
  props.setRating(rate);
  return rate;

};

/*     sum Array, used for rating     */
const sumArray = (array) => {
  let sum = 0;
  for(let i = 0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// NEW
/*     Reset sequence     */
// !!!!! fix needed, doesnt reset the sound
/*
const resetSequence = () => {
  let emptyArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  props.setSequence(emptyArr);
};
*/
  
// -----   THE LOOP   -----
/* trick here : beatvar and beat are the same but we need to use beatvat(global var) for the audio
can t work in a foreach loop with a state
beat is a state and is used for re rendering
*/
const configLoop = () => {
    const repeat = (time) => {    
      props.sequence.forEach((row) => {
        let pad = row[beatvar];
        if (pad === 1) {
          players[props.sequence.indexOf(row)].start(time);
        }
      });
      beatvar = (beatvar + 1) % 16;
      setBeat(beatvar);
    }; // repeat
    Tone.Transport.bpm.value = 120;
    Tone.Transport.scheduleRepeat(repeat, "16n");
  };

  return (
    <div id="groove-box">
      <div id="rating">
       {RatingStars}
      </div>
      <div id="startstop">
        {PlayStopButton}
      </div>
      <form id="bpm">
        <label for="points"></label>
        <div id="bpmdisplay">BPM : {Math.floor(Tone.Transport.bpm.value)}</div>
        <input type="range" id="points" min="60" max="320" value={props.bpm} className="slider" onInput={handleBpmChange} onChange={handleBpmChange}></input>
      </form>

      {/* 
      <button id="resetbutton" onClick={resetSequence}>Reset Sequence</button>
      */}
      <div id="displaywrapper">
        <div id="display">
          {props.mood} - {display}
        </div>
        <div id="bankbutton">
          <FaCaretUp className="icon" onClick={handleIncrementMood} />
          <div style={{fontSize:'0.5em'}}>Mood</div>
          <FaCaretDown className="icon" onClick={handleDecrementMood} />
        </div>
      </div>
      <div id="switches" className="switchesandvolume">

    <>
    {props.sequence.map((row, i)=>{
        return  (
        <div className="gridrow">
            
        {props.sequence[i].map((d, j) =>
        <div>
        <Switch 
        key={i + j} id={j} ins={i} step={j} beat={beat} isOn={isOn} sequence={props.sequence} volume={props.volume} handleSequence={handleSequence} />
        </div>
        )}

        <form className="volume">
            <label for="points">{names[i]}</label>
            <input type="range" name={i} id="insVolume" min="-40" max="0" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
        </form>
        </div>
        )})}     
    </>

      </div>
    </div>

    );
}

export default Groovebox;