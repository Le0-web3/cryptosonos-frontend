import React, { useEffect, useState } from 'react';
import './Soundsystem.css';
import toptekno from "../../pictures/toptekno.png";
import topdub from "../../pictures/topdub.png";
import topjungle from "../../pictures/topjungle.png";
import midtekno from "../../pictures/midtekno.png";
import middub from "../../pictures/middub.png";
import midjungle from "../../pictures/midjungle.png";
import kicktekno from "../../pictures/kicktekno.png";
import kickdub from "../../pictures/kickdub.png";
import kickjungle from "../../pictures/kickjungle.png";
import subtekno from "../../pictures/subtekno.png";
import subdub from "../../pictures/subdub.png";
import subjungle from "../../pictures/subjungle.png";

const BuildedSono = (props) => {

// -----   USE STATE   -----


// -----   RENDER   -----
const renderTop = () => {
let topteknonumber = props.builded["top"]["tekno"];
let topdubnumber = props.builded["top"]["dub"];
let topjunglenumber = props.builded["top"]["jungle"];
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
        <img src={toptekno} alt={number} />
      </div>
    ))}

    {myDubArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={topdub} alt={number} />
      </div>
    ))}

    {myJungleArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={topjungle} alt={number} />
      </div>
    ))}
    </>
    );

} // renderTop

const renderMid = () => {
  let midteknonumber = props.builded["mid"]["tekno"];
  let middubnumber = props.builded["mid"]["dub"];
  let midjunglenumber = props.builded["mid"]["jungle"];
  let myTeknoArr = [];
  let myDubArr = [];
  let myJungleArr = [];
  
  for(let i = 0; i < midteknonumber; i++) {
      myTeknoArr.push(i);
  }
  
  for(let i = 0; i < middubnumber; i++) {
    myDubArr.push(i);
  }
  
  for(let i = 0; i < midjunglenumber; i++) {
    myJungleArr.push(i);
  }
  
      // Render Methods
      return (
  
      <>
      {myTeknoArr.map((number, index) => (
        <div key={number} id="buildedmidwrapper">
          <img src={midtekno} alt={number} />
        </div>
      ))}
  
      {myDubArr.map((number, index) => (
        <div key={number} id="buildedmidwrapper">
          <img src={middub} alt={number} />
        </div>
      ))}
  
      {myJungleArr.map((number, index) => (
        <div key={number} id="buildedmidwrapper">
          <img src={midjungle} alt={number} />
        </div>
      ))}
      </>
      );
  
  } // renderMid

const renderKick = () => {
  let kickteknonumber = props.builded["kick"]["tekno"];
  let kickdubnumber = props.builded["kick"]["dub"];
  let kickjunglenumber = props.builded["kick"]["jungle"];
  let myTeknoArr = [];
  let myDubArr = [];
  let myJungleArr = [];
  
  for(let i = 0; i < kickteknonumber; i++) {
      myTeknoArr.push(i);
  }
  
  for(let i = 0; i < kickdubnumber; i++) {
    myDubArr.push(i);
  }
  
  for(let i = 0; i < kickjunglenumber; i++) {
    myJungleArr.push(i);
  }
  
      // Render Methods
      return (
  
      <>
      {myTeknoArr.map((number, index) => (
        <div key={number} id="buildedkickwrapper">
          <img src={kicktekno} alt={number} />
        </div>
      ))}
  
      {myDubArr.map((number, index) => (
        <div key={number} id="buildedkickwrapper">
          <img src={kickdub} alt={number} />
        </div>
      ))}
  
      {myJungleArr.map((number, index) => (
        <div key={number} id="buildedkickwrapper">
          <img src={kickjungle} alt={number} />
        </div>
      ))}
      </>
      );
  
  } // renderKick

  const renderSub = () => {
    let subteknonumber = props.builded["sub"]["tekno"];
    let subdubnumber = props.builded["sub"]["dub"];
    let subjunglenumber = props.builded["sub"]["jungle"];
    let myTeknoArr = [];
    let myDubArr = [];
    let myJungleArr = [];
    
    for(let i = 0; i < subteknonumber; i++) {
        myTeknoArr.push(i);
    }
    
    for(let i = 0; i < subdubnumber; i++) {
      myDubArr.push(i);
    }
    
    for(let i = 0; i < subjunglenumber; i++) {
      myJungleArr.push(i);
    }
    
        // Render Methods
        return (
    
        <>
        {myTeknoArr.map((number, index) => (
          <div key={number} id="buildedsubwrapper">
            <img src={subtekno} alt={number} />
          </div>
        ))}
    
        {myDubArr.map((number, index) => (
          <div key={number} id="buildedsubwrapper">
            <img src={subdub} alt={number} />
          </div>
        ))}
    
        {myJungleArr.map((number, index) => (
          <div key={number} id="buildedsubwrapper">
            <img src={subjungle} alt={number} />
          </div>
        ))}
        </>
        );
    
    } // renderSub




    return (
  <div id="buildedsono">
    <div id="rendertop">
        {renderTop()}
    </div>
    <div id="rendermid">
        {renderMid()}
    </div>
    <div id="renderkick">
        {renderKick()}
    </div>
    <div id="rendersub">
        {renderSub()}
    </div>
  </div>

    );
}

export default BuildedSono;