import React, { useEffect, useState } from 'react';
import './Soundsystem.css';
// import subtekno from 'public/pictures/subtekno.png'; // Tell webpack this JS file uses this image
import subtekno from "../../pictures/subtekno.png";
import kicktekno from "../../pictures/kicktekno.png";
import midtekno from "../../pictures/midtekno.png";
import toptekno from "../../pictures/toptekno.png";
import subdub from "../../pictures/subdub.png";
import kickdub from "../../pictures/kickdub.png";
import middub from "../../pictures/middub.png";
import topdub from "../../pictures/topdub.png";
import subjungle from "../../pictures/subjungle.png";
import kickjungle from "../../pictures/kickjungle.png";
import midjungle from "../../pictures/midjungle.png";
import topjungle from "../../pictures/topjungle.png";

const initialState = {
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
}

const Soundsystem = () => {

    const [builded, setBuilded] = useState(initialState);

    const handleClick = (event) => {
        var _target = event.target;
        let box = _target.attributes.box.value;
        let mood = _target.attributes.mood.value;

        /*
        setBuilded(previousState => {
            return { ...previousState, {box.mood}: box.mood+1}
          });
*/





        console.log(box)
        console.log(mood)
        console.log(builded.top.dub)
    }


    return (

    <div id="soundsystem-content">
        <div id="build">
            <div id="buildtop"></div>
            <div id="buildmid"></div>
            <div id="buildkick"></div>
            <div id="buildsub"></div>
        </div>
        <div id="inventory">
            <div className="category">Tekno</div>
            <button className="inventoryLine" id="topteknobutton" box="top" mood="tekno" aria-label="toptekno" onClick={handleClick}></button>
            <button className="inventoryLine" id="midteknobutton" box="mid" mood="tekno" aria-label="midtekno" onClick={handleClick}></button>
            <button className="inventoryLine" id="kickteknobutton" box="kick" mood="tekno" aria-label="kicktekno" onClick={handleClick}></button>
            <button className="inventoryLine" id="subteknobutton" box="sub" mood="tekno" aria-label="subtekno" onClick={handleClick}></button>
            <div className="category">Dub</div>
            <div>Sub</div>
            <div>Kick</div>
            <div>Mid</div>
            <div>Top</div>
            <div className="category">Jungle</div>
            <div>Sub</div>
            <div>Kick</div>
            <div>Mid</div>
            <div>Top</div>
        </div>
        
    </div>

    );
}

export default Soundsystem;