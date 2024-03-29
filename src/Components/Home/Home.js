import React, { useEffect, useState } from 'react';
import './Home.css';
import MiniGroovebox from './../Groovebox/MiniGroovebox.js';
import BuildedSono from './../Soundsystem/BuildedSono.js';
import SequenceRating from './../SequenceRating/SequenceRating.js';

const Home = (props) => {

const [partyText, setPartyText] = useState("Host a Party !");
const [probatomint, setProbatomint] = useState(0.5);

useEffect(() => {
    if(props.partyState === "partying") {
        setPartyText("Partying...");
    } else  { 
        setPartyText("Host a Party !");
    } 
    }, [props.partyState] )

// give proba to mint or 261 or 262 or 263 if full sound
useEffect(() => {
    if(props.sequenceRating + props.soundSystemRating < 26) {
        setProbatomint((props.sequenceRating + props.soundSystemRating)*10);
    } else if(props.sequenceRating + props.soundSystemRating == 26 && props.mood == "tekno") {
        setProbatomint(261);
    } else if(props.sequenceRating + props.soundSystemRating == 26 && props.mood == "dub") {
        setProbatomint(262);
    } else if(props.sequenceRating + props.soundSystemRating == 26 && props.mood == "jungle") {
        setProbatomint(263);
    }
    }, [props.sequenceRating, props.soundSystemRating] )

    return (
    <div id="homecontent">
      <div id="welcome">
        <h1>Welcome to <div id="title">Crypto Sonos</div></h1>
      </div>
            <div className="card" id="rulescard" onClick={(e) => {props.handleClickView(e);}}>How to PLay</div>
        
            <div className="buttoncolumn" id="grooveboxarea">        
                <MiniGroovebox    
                    id="grooveboxbuttonimage"    
                    mood={props.mood}
                    sequence={props.sequence}
                    />
                <SequenceRating 
                    sequence={props.sequence} 
                    bpm={props.bpm} 
                    mood={props.mood} 
                    sequenceRating={props.sequenceRating} 
                    setSequenceRating={props.setSequenceRating}
                 />
                <div className="card" id="grooveboxcard" onClick={(e) => {props.handleClickView(e);}}>Groove Box</div>
            </div>
            <div className="buttoncolumn" id="soundsystemarea">     
                <div className="sonoimage"> 
                <BuildedSono    
                    id="soundsystembuttonimage"    
                    builded={props.builded}
                    setBuilded={props.setBuilded}
                    />
                </div>  
                <div className="card" id="soundsystemcard" onClick={(e) => {props.handleClickView(e);}}>Sound System</div>
            </div>      
            <div id="lastparty">last party : {props.lastParty}</div>
            <div className="partyrating">Score : {props.sequenceRating + props.soundSystemRating} </div>
            <div className={`card${props.partyState}`} id="hostarea" onClick={props.hostAPartyAction(probatomint)}>{partyText}</div>
    </div>


    );
}

export default Home;