import React, { useEffect, useState } from 'react';
import './Soundsystem.css';
// import subtekno from 'public/pictures/subtekno.png'; // Tell webpack this JS file uses this image

import BuildedSono from './BuildedSono';

const Soundsystem = (props) => {

// -----   USE STATE   -----

/* Logic: when user connect we print is total inventory in userInventory.
We use remaining for display.
When he drags drops (or click)s we update builded and remaining.
*/
    /* moving this state in App
    const [builded, setBuilded] = useState(initialBuildedState); */
    const [remaining, setRemaining] = useState({
        top: {
            tekno: props.NFTOwned[0],
            dub: props.NFTOwned[4],
            jungle: props.NFTOwned[8]
        },
        mid : {
            tekno: props.NFTOwned[1],
            dub: props.NFTOwned[5],
            jungle: props.NFTOwned[9]
        },
        kick : {
            tekno: props.NFTOwned[2],
            dub: props.NFTOwned[6],
            jungle: props.NFTOwned[10]
        },
        sub : {
            tekno: props.NFTOwned[3],
            dub: props.NFTOwned[7],
            jungle: props.NFTOwned[11]
        }
    });
    const [refresh, setRefresh] = useState(0);

    const handleClick = (event) => {
    // get the type and mood of clicked box
        var _target = event.target;
        let targetbox = _target.attributes.box.value;
        let targetmood = _target.attributes.mood.value;
        let varBuilded = {...props.builded}; // so it trigger re-render. Way to go with object states
        let varRemaining = {...remaining};
    //if top and top builded < 2, add to builded and remove 1 from remaining
        if(targetbox === "top") {
            if(props.builded[targetbox]["tekno"] + props.builded[targetbox]["dub"] + props.builded[targetbox]["jungle"] < 2 && remaining[targetbox][targetmood] > 0) {
            //    let varBuilded = props.builded;
                varBuilded[targetbox][targetmood] += 1; 
                props.setBuilded(varBuilded);
            //    let varRemaining = remaining;
                varRemaining[targetbox][targetmood] -= 1; 
                setRemaining(varRemaining);
            } // if builded < 2 and remaining > 0
        } // if top

    //if not top and top builded < 4, add to builded and remove 1 from remaining
    if(targetbox !== "top") {
        if(props.builded[targetbox]["tekno"] + props.builded[targetbox]["dub"] + props.builded[targetbox]["jungle"] < 4 && remaining[targetbox][targetmood] > 0) {
        //    let varBuilded = props.builded;
            varBuilded[targetbox][targetmood] += 1; 
            props.setBuilded(varBuilded);
        //    let varRemaining = remaining;
            varRemaining[targetbox][targetmood] -= 1; 
            setRemaining(varRemaining);
        } // if builded < 4 and remaining > 0
    } // if not top
        /*
        setBuilded(previousState => {
            return { ...previousState, {box.mood}: box.mood+1}
          });
*/
        console.log("builded : ")
        console.log(props.builded)
        console.log("remaining : ")
        console.log(remaining)
        setRefresh(refresh+1) // trick for refreshing
} // handleClick

const unBuild = () => {
    props.setBuilded({
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
} // unBuild

// -----   RATING   -----
// ----- Main rating   -----
const rateSoundSystem = () => {
    let rate = buildedTotalBoxes() + buildedBoxesMood() + buildedRatio() + fullSoundGoodMood();
return rate;
};

//  ----- Criterias   -----
const buildedTotalBoxes = () => { // criteria 1, 1 point per box
    let sum = 0;
    for(let i = 0; i < Object.values(props.builded).length; i++) {
      sum += Object.values(Object.values(props.builded)[i]).reduce((a, b) => a + b, 0)
    }
    if(sum === 0) { // boombox
        return 0.5;
    } else {
        return sum;
    }
  };
/*
const buildedBoxesMood = () => { // criteria 2, 0.5 point per box mood compliant
    let sum = 0;
    for(let i = 0; i < Object.values(props.builded).length; i++) {
      sum += Object.values(props.builded)[i][props.mood]*0.5;
    };
    return sum;
  };
*/
const buildedBoxesMood = () => { // criteria 2, 0.5 point per box mood compliant
let sum = 0;
for(let i = 0; i < Object.values(props.builded).length; i++) {
    sum += Object.values(props.builded)[i][props.mood]*0.5;
};
return sum;
};

const buildedRatio = () => { // criteria 3, 1 point if perfect ratio
    const tops = Object.values(Object.values(props.builded)[0]).reduce((a, b) => a + b, 0)
    const mids = Object.values(Object.values(props.builded)[1]).reduce((a, b) => a + b, 0)
    const kicks = Object.values(Object.values(props.builded)[2]).reduce((a, b) => a + b, 0)
    const subs = Object.values(Object.values(props.builded)[3]).reduce((a, b) => a + b, 0)
        if(tops === 1 && mids === 2 && kicks === 2 && subs === 2) {
            return 1;
        } else if(tops === 2 && mids === 4 && kicks === 4 && subs === 4) {
            return 1;
        } else {return 0;}
    };

const fullSoundGoodMood = () => { // criteria 4, 1 point if full sound good mood
        let sum = 0;
        for(let i = 0; i < Object.values(props.builded).length; i++) {
          sum += Object.values(props.builded)[i][props.mood];
        }
        if(sum === 14) {
            return 1;
        } else {return 0;}
    };
    
    /*
    setRemaining({
        top: {
            tekno: 4,
            dub: 2,
            jungle: 1
        },
        mid : {
            tekno: 2,
            dub: 3,
            jungle: 7  
        },
        kick : {
            tekno: 3,
            dub: 2,
            jungle: 1  
        },
        sub : {
            tekno: 3,
            dub: 10,
            jungle: 3  
        }
    }) */


// -----   USE EFFECT   -----
    /*     refresh     */
    // !!!!! not working
    /*
    useEffect(() => {
        console.log("refreshing")

    }, [refresh] )
    */

useEffect(() => {
    setRemaining({
        top: {
            tekno: props.NFTOwned[0]-props.builded.top.tekno,
            dub: props.NFTOwned[4]-props.builded.top.dub,
            jungle: props.NFTOwned[8]-props.builded.top.jungle
        },
        mid : {
            tekno: props.NFTOwned[1]-props.builded.mid.tekno,
            dub: props.NFTOwned[5]-props.builded.mid.dub,
            jungle: props.NFTOwned[9]-props.builded.mid.jungle
        },
        kick : {
            tekno: props.NFTOwned[2]-props.builded.kick.tekno,
            dub: props.NFTOwned[6]-props.builded.kick.dub,
            jungle: props.NFTOwned[10]-props.builded.kick.jungle
        },
        sub : {
            tekno: props.NFTOwned[3]-props.builded.sub.tekno,
            dub: props.NFTOwned[7]-props.builded.sub.dub,
            jungle: props.NFTOwned[11]-props.builded.sub.jungle
        }
    });
    props.setSoundSystemRating(rateSoundSystem());
}, [props.NFTOwned, props.builded] )



    return (

<div>
    <div id="soundsystem-content">
        <div id="build">
            <div><BuildedSono builded={props.builded} /></div>
        </div>
        <button className="button" onClick={unBuild}>Unbuild</button>
        <div id="inventory">
            <div className="category">Tekno</div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="topteknobutton" box="top" mood="tekno" aria-label="toptekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.top.tekno}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="midteknobutton" box="mid" mood="tekno" aria-label="midtekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.tekno}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickteknobutton" box="kick" mood="tekno" aria-label="kicktekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.tekno}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subteknobutton" box="sub" mood="tekno" aria-label="subtekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.tekno}</div>
                </div>
            <div className="category">Dub</div>
            <div className="inventoryLine">
                    <button className="boxbutton" id="topdubbutton" box="top" mood="dub" aria-label="topdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.top.dub}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="middubbutton" box="mid" mood="dub" aria-label="middub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.dub}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickdubbutton" box="kick" mood="dub" aria-label="kickdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.dub}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subdubbutton" box="sub" mood="dub" aria-label="subdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.dub}</div>
                </div>
            <div className="category">Jungle</div>
            <div className="inventoryLine">
                    <button className="boxbutton" id="topjunglebutton" box="top" mood="jungle" aria-label="topjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.top.jungle}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="midjunglebutton" box="mid" mood="jungle" aria-label="midjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.jungle}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickjunglebutton" box="kick" mood="jungle" aria-label="kickjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.jungle}</div>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subjunglebutton" box="sub" mood="jungle" aria-label="subjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.jungle}</div>
                </div>
        </div>
        <div className="soundsystemrating"> Sound System Score : {props.soundSystemRating}</div>
    </div>
    
    
</div>

    );
}

export default Soundsystem;