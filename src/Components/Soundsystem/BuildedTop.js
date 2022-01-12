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


// faut faire des Cards

if(topteknonumber > 0) {
    if (topteknonumber == 1) {
        return <div>Image 1</div>
    }  // if == 1
    else if (topteknonumber == 2) {
        return <div>Image 1 Image 2</div>
    }
} // if < 0
 else {



    return     <div>
    
                </div>;
}

} // renderTop

useEffect(() => {
    topArray = Object.entries(props.builded.top);
  }, [props.builded] )

    return (
        
    <div>
        {renderTop()}
    </div>

    );
}

export default BuildedTop;