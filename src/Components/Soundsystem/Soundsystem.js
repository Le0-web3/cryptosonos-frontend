import React, { useEffect, useState } from 'react';
import './Soundsystem.css';
// import subtekno from 'public/pictures/subtekno.png'; // Tell webpack this JS file uses this image

import BuildedSono from './BuildedSono';

//     for testing purpose, will have to get from SC
const userInventory = {
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
}

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
    //if top and top builded < 2, add to builded and remove 1 from remaining
        if(targetbox == "top") {
            if(props.builded[targetbox]["tekno"] + props.builded[targetbox]["dub"] + props.builded[targetbox]["jungle"] < 2 && remaining[targetbox][targetmood] > 0) {
                let varBuilded = props.builded;
                varBuilded[targetbox][targetmood] += 1; 
                props.setBuilded(varBuilded);
                let varRemaining = remaining;
                varRemaining[targetbox][targetmood] -= 1; 
                setRemaining(varRemaining);
            } // if builded < 2 and remaining > 0
        } // if top

    //if not top and top builded < 4, add to builded and remove 1 from remaining
    if(targetbox != "top") {
        if(props.builded[targetbox]["tekno"] + props.builded[targetbox]["dub"] + props.builded[targetbox]["jungle"] < 4 && remaining[targetbox][targetmood] > 0) {
            let varBuilded = props.builded;
            varBuilded[targetbox][targetmood] += 1; 
            props.setBuilded(varBuilded);
            let varRemaining = remaining;
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

    }

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
    })
    
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
}

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
                    <div className="inventoryNumber"> x {remaining.top.tekno}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(0)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="midteknobutton" box="mid" mood="tekno" aria-label="midtekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.tekno}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(1)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickteknobutton" box="kick" mood="tekno" aria-label="kicktekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.tekno}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(2)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subteknobutton" box="sub" mood="tekno" aria-label="subtekno" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.tekno}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(3)}>Mint</button>
                </div>
            <div className="category">Dub</div>
            <div className="inventoryLine">
                    <button className="boxbutton" id="topdubbutton" box="top" mood="dub" aria-label="topdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.top.dub}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(4)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="middubbutton" box="mid" mood="dub" aria-label="middub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.dub}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(5)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickdubbutton" box="kick" mood="dub" aria-label="kickdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.dub}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(6)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subdubbutton" box="sub" mood="dub" aria-label="subdub" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.dub}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(7)}>Mint</button>
                </div>
            <div className="category">Jungle</div>
            <div className="inventoryLine">
                    <button className="boxbutton" id="topjunglebutton" box="top" mood="jungle" aria-label="topjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.top.jungle}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(8)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="midjunglebutton" box="mid" mood="jungle" aria-label="midjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.mid.jungle}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(9)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="kickjunglebutton" box="kick" mood="jungle" aria-label="kickjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.kick.jungle}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(10)}>Mint</button>
                </div>
                <div className="inventoryLine">
                    <button className="boxbutton" id="subjunglebutton" box="sub" mood="jungle" aria-label="subjungle" onClick={handleClick}></button>
                    <div className="inventoryNumber"> x {remaining.sub.jungle}</div><button className="mintbutton" onClick={props.mintBoxNFTAction(11)}>Mint</button>
                </div>
        </div>
    </div>
    
    
</div>

    );
}

export default Soundsystem;