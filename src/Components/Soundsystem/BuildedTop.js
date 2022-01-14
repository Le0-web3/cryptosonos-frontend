import React, { useEffect, useState } from 'react';
import './Soundsystem.css';
import toptekno from "../../pictures/toptekno.png";
import topdub from "../../pictures/topdub.png";
import topjungle from "../../pictures/topjungle.png";

const BuildedTop = (props) => {

let topArray = Object.entries(props.builded.top);

// -----   USE STATE   -----


// -----   RENDER   -----
const renderTop = () => {
let topteknonumber = props.builded["top"]["tekno"];
let topdubnumber = props.builded["top"]["dub"];
let topjunglenumber = props.builded["top"]["jungle"];
let topTeknoString = "<div id='topteknobuilded'></div>";
let myTeknoArr = [];
let myDubArr = [];
let myJungleArr = [];

for(let i = 0; i < topteknonumber; i++) {
    myTeknoArr.push(i);
}

for(let i = 0; i < topdubnumber; i++) {
  myDubArr.push(i);
}

for(let i = 0; i < topjunglenumber; i++) {
  myJungleArr.push(i);
}

// faut faire des Cards

    // Render Methods
    return (

    <>
    {myTeknoArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={toptekno} alt={number} className="topboxes" />
      </div>
    ))}

    {myDubArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={topdub} alt={number} className="topboxes" />
      </div>
    ))}

    {myJungleArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={topjungle} alt={number} className="topboxes" />
      </div>
    ))}
    </>
    );

} // renderTop

useEffect(() => {
    topArray = Object.entries(props.builded.top);
  }, [props.builded] )


    return (
        
    <div id="rendertop">
        {renderTop()}
    </div>

    );
}

export default BuildedTop;