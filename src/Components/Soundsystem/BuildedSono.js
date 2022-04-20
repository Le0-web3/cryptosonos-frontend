import React, { useEffect, useState } from 'react';
import './Soundsystem.css';

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
        <img src={`https://cloudflare-ipfs.com/ipfs/QmaCyhjGKVv7ctGTqxD9zDEWvuHM12tWYqPAo2kD8HLeDt`} alt={number} />
      </div>
    ))}

    {myDubArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={`https://cloudflare-ipfs.com/ipfs/QmXAMdL2TpUj8KYwQ6YcASDeVjKnnsf3rFt9kaV6ELAess`} alt={number} />
      </div>
    ))}

    {myJungleArr.map((number, index) => (
      <div key={number} id="buildedtopwrapper">
        <img src={`https://cloudflare-ipfs.com/ipfs/QmYfARoTJZSghovyQj6ukVepZkn8YRUhX51Ro9RAqfPkDk`} alt={number} />
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
          <img src={`https://cloudflare-ipfs.com/ipfs/QmUNgESyVv65FCnRFAFQidd6vcf9szgJ6Zux7fygsFT9mv`} alt={number} />
        </div>
      ))}
  
      {myDubArr.map((number, index) => (
        <div key={number} id="buildedmidwrapper">
          <img src={`https://cloudflare-ipfs.com/ipfs/QmTeCKCpKnEuWgzLmhy5YTvMB1wurvXA8FtZugGwo1gvk8`} alt={number} />
        </div>
      ))}
  
      {myJungleArr.map((number, index) => (
        <div key={number} id="buildedmidwrapper">
          <img src={`https://cloudflare-ipfs.com/ipfs/QmTi2adypcZoBWnSL6yzprCPUnKHQWixe7kXyZsp7BeQu7`} alt={number} />
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
          <img src={`https://cloudflare-ipfs.com/ipfs/QmbRmEBegpTQHbtthHK8UioPkwp9og3fKPuPmjKoF3bh8Q`} alt={number} />
        </div>
      ))}
  
      {myDubArr.map((number, index) => (
        <div key={number} id="buildedkickwrapper">
          <img src={`https://cloudflare-ipfs.com/ipfs/QmbSyj8sHkHjvuf7TMB5H4x5usDxsWNhGATVxCVwPzYz4j`} alt={number} />
        </div>
      ))}
  
      {myJungleArr.map((number, index) => (
        <div key={number} id="buildedkickwrapper">
          <img src={`https://cloudflare-ipfs.com/ipfs/QmaxPAto9RbRRRAmN6oPPbDxfnYGvubs5XGDhbdKSjmrWb`} alt={number} />
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
            <img src={`https://cloudflare-ipfs.com/ipfs/QmNvRYe3aWUXPFmsAVrARB8iK4TtcDXn6oaFwybAZcpauL`} alt={number} />
          </div>
        ))}
    
        {myDubArr.map((number, index) => (
          <div key={number} id="buildedsubwrapper">
            <img src={`https://cloudflare-ipfs.com/ipfs/QmX195iGxKaK5JQEHmBNs1JGERyfvWFXKx8x5jjWnEhzaR`} alt={number} />
          </div>
        ))}
    
        {myJungleArr.map((number, index) => (
          <div key={number} id="buildedsubwrapper">
            <img src={`https://cloudflare-ipfs.com/ipfs/QmaM1ozSSXSdr3v1TBAQdibgMkoSFy3RS6cJokwrN1FXzE`} alt={number} />
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