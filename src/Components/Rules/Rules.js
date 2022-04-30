import React, { useEffect, useState } from 'react';
import './Rules.css';

const Rules = () => {

    return (
    <div id="rulescontent">
        <h1>How to PLay</h1>
            <h2>Overwiew</h2>
                <div>
                    CryptoSonos is a free mini-game built for Aurora ! Make music, build sound systems, loot NFTs !
                </div>
                <br />
            <h2>Build a Groovebox Sequence</h2>
                <div>
                    Go to the groovebox. Choose a style, compose a pattern, and get the most stars you can ! 
                </div>
                <br />
            <h2>Build your Sound Sytem</h2>
                <div>
                    Build your sound system thanks to your box NFTs and aim for a high score ! If you don't have any for now, don't worry, you still have your boombox to start !
                </div>
                <br />
            <h2>Host A Party</h2>
                <div>
                Once you have composed a groovebox sequence and maybe built a sound system, let's throw a party and hope for a NFT drop !
                The better your party score, the higher your chances to drop a NFT.
                </div>
    </div>
    );
}

export default Rules;