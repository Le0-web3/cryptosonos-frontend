import React, { useEffect, useState } from 'react';
import './Home.css';
import MiniGroovebox from './../Groovebox/MiniGroovebox.js';
import BuildedSono from './../Soundsystem/BuildedSono.js';
import SequenceRating from './../SequenceRating/SequenceRating.js';

const Home = (props) => {

const [partyText, setPartyText] = useState("Host a Party !");

useEffect(() => {
    if(props.partyState == "partying") {
        setPartyText("Partying...");
    } else  { 
        setPartyText("Host a Party !");
    } 
    }, [props.partyState] )



    return (
    <div id="homecontent">
      <div id="welcome">
        <h1>Welcome to <div id="title">Crypto Sonos</div></h1>
      </div>
            <div className="card" id="rulescard" onClick={(e) => {props.handleClickView(e);}}>Rules</div>
        
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
                    rating={props.rating} 
                    setRating={props.setSequenceRating}
                 />
                <div className="card" id="grooveboxcard" onClick={(e) => {props.handleClickView(e);}}>Groovebox</div>
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
            <div className={`card${props.partyState}`} id="hostarea" onClick={props.hostAPartyAction()}>{partyText}</div>

        

    </div>


    );
}

export default Home;