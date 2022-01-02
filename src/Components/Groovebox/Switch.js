import React from 'react';
import { useState, useEffect } from "react";
import './Groovebox.css';

// Child
// Parent : Groovebox
function Switch(props) {

//   -----   HOOKS   -----
const [backgroundColor, setBackgroundColor] = useState("var(--color2)");

//   -----   USE EFFECT   -----
/*     Background Color     */
useEffect(() => {
if(props.isOn) {
    if(props.step == props.beat && props.sequence[props.ins][props.step] == 1) {
        setBackgroundColor('var(--color3)');
    } else if(props.step != props.beat && props.sequence[props.ins][props.step] == 1) {
        setBackgroundColor('var(--color4)')
    } else if(props.step == props.beat && props.sequence[props.ins][props.step] != 1) {
        setBackgroundColor("var(--color5)")
    } else {setBackgroundColor('var(--color2)') }
} else if(!props.isOn) {
    if(props.sequence[props.ins][props.step] == 1) {setBackgroundColor('var(--color4)')
    } else {setBackgroundColor('var(--color2)')}
}
}, [props.beat, props.sequence, props.isOn]);

//   -----   RETURN   -----

  return (

// We just create 1 model of switch and define its properties, we create the grid and pass value through parent
<div style={{backgroundColor: backgroundColor}} className="switch" id={props.id} step={props.step} onClick={() => {
    props.handleSequence(props.ins, props.step);
    }}>
    {props.step+1}
</div>
) // return
} // Switch

export default Switch;