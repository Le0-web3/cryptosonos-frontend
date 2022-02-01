import React, { useEffect, useState } from 'react';
import './Rules.css';

const Rules = () => {

    return (
    <div id="rulescontent">
        <h1>How to PLay</h1>
            <h2>Overwiew</h2>
                <div>
                    CryptoSonos is a Play-to-earn NFT mini-game built for Aurora. Players collect NFT boxes to build a Soundsystem. Once they have built a soundsytem and a sequence, they can host a party and run a chance to loot a NFT. The higher the party’s  score, the higher XP amount they earn. XP allows increasing player’s rank, and rank increases the loot chances.  Rank also unlocks the moods.
                </div>
            <h2>Host a party</h2>
                <div>
                    Once every 24h, a player can host a party for free. If he wants, he can pay for hosting more parties before the cooldown ends. Each party has a score based on groovebox sequence and built sound system. 
                </div>
            <h2>Groovebox</h2>
                <div>
                    The player can compose a sequence in the Groovebox view. A sequence can be from 0 to 3 stars, by fulfilling requirements depending on mood. The most stars it gives, the higher the party’s score.
                </div>
            <h2>Soundsystem</h2>
                <div>
                Player can build a sound system with the boxes NFT he owns. There are 4 types of boxes (top, mid, kick, sub) for each mood. The more mood compliant, balanced, and biggest soundsystem, the higher the party’s score.
                To prevent a player to use multiple wallet, a freshly received NFT can’t be used before 12h.
                Player start with a boombox, which is not an NFT.
                </div>
            <h2>Mood</h2>
                <div>
                    There are currently 3 moods : tekno, dub, jungle.
                </div>
            <h2>Gameplay</h2>
                <div>
                    Player aims to host parties with the highest possible score to gain XP, and so increase its rank and loot chances. He may want to unlocks moods if it fits better with the NFT he owns. The endgame is to have a full sound system for a mood, and win a Sono NFT.
                </div>
            <h2>Sono NFT</h2>
                <div>
                    layer has to host a party with a full soundsystem, for one mood, and a 3 stars sequence for that mood. This NFT may provide some advantages for the owner in the future. Each wallet can only have 1 Sono NFT for each mood.
                </div>
            <h2>Sound system score</h2>
                <div>
                    -	Each box provides a base score of 1.
                    -	If a box has the same mood than the mood used for the party, it provides an additional 0.5 score.
                    -	If built sound system has at least 1 box of each type (sub, kick, mid, top), score is +1.
                    -	If built sound system has a perfect ratio, it gives +1 score. Perfect ratio is 1 top, 2 mid, 2 kick, 2 sub. There are 2 possibilities for a perfect ratio : Full sound or half a sound.
                    -	Full sound mood compliant provides +1 score.

                    If player hosts a party without a soundsystem, it will use the boombox.
                    Maximum sound system score is 24. Minimum is 0.5 with the boombox.
                </div>
            <h2>Sequence’s score</h2>
                <div>
                    -	0 star sequence provides score + 0
                    -	1 star provides score +1
                    -	2 stars provides score +2
                    -	3 stars provide score +3
                    Player can’t host a party with an empty sequence.
                </div>
            <h2>Party’s score</h2>
                <div>
                    Party’s score = Sound system score + groovebox score.
                    Maximum party’s score is 27.
                </div>
            <h2>Loot chances</h2>
                <div>
                    The loot chance increases with the score following the formula :
                    Loot chance = 10% +PI*Square(Score)/100
                    If a player loots, he will receive a random NFT. If he has a full Soundsystem with 14 boxes of the same mood and use a 3 stars sequence with this mood, and if he doesn’t already own a Sono NFT for this mood, then if he loots he will receive the Sono NFT for this mood.
                </div>
            <h2>Rank</h2>
                <div>
                    By hosting parties, player also increases its rank by earning XP. The amount of the XP earned for each party is equal to Loot chance*1000. For each 1000 XP earned, rank increases. Here is the ranking rewards map :
                    -	Rank 1 : 2 more Groovebox rows
                    -	Rank 2 : Dub mood
                    -	Rank 3 : 2 more Groovebox rows
                    -	Rank 4 : Jungle mood
                    -	Rank 5: Player can loot Sono NFT 
                </div>
            <h2>Tokenomics</h2>
                <div>
                    The only revenue for the team comes from a 5% market fee on NFTs.
                    There are 10 000 Sono NFTs for each mood.
                    There are 100 000 NFT for each boxes and each mood, except the top boxes (only 50 000 for each mood).
                </div>
    </div>
    );
}

export default Rules;