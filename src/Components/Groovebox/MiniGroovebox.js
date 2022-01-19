import React, { useEffect, useState } from 'react';
import './MiniGroovebox.css';


// ----- GLOBAL AND CONSTANT -----

// Child
// Parent : MiniGroovebox
function MiniSwitch(props) {

    //   -----   HOOKS   -----
    const [backgroundColor, setBackgroundColor] = useState("var(--color2)");
    
    //   -----   USE EFFECT   -----
    /*     Background Color     */
    useEffect(() => {
        if(props.sequence[props.ins][props.step] == 1) {
            setBackgroundColor('var(--color4)')
        } else if(props.sequence[props.ins][props.step] != 1) {
            setBackgroundColor("var(--color2)")
        }
    }, [props.sequence]);
    
    //   -----   RETURN   -----
    
      return (
    
    // We just create 1 model of switch and define its properties, we create the grid and pass value through parent
    <div style={{backgroundColor: backgroundColor}} className="miniswitch" id={props.id} step={props.step}>

    </div>
    ) // return
    } // MiniSwitch

const MiniGroovebox = (props) => {

// -----   USE STATE   -----


// -----   USE EFFECT   -----


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


// -----   SET STATE METHODS   -----


  return (
    <div id="mini-groove-box">
      {/* 
      <button id="resetbutton" onClick={resetSequence}>Reset Sequence</button>
      */}
      <div id="minidisplaywrapper">
        <div id="minidisplay">
          {props.mood}
        </div>
      </div>
      <div id="miniswitches" className="miniswitchesandvolume">

    <>
    {props.sequence.map((row, i)=>{
        return  (
        <div className="minigridrow">
            
        {props.sequence[i].map((d, j) =>
        <div>
        <MiniSwitch 
        key={i + j} id={j} ins={i} step={j} sequence={props.sequence} />
        </div>
        )}
        </div>
        )})}     
    </>

      </div>
    </div>

    );
}

export default MiniGroovebox;