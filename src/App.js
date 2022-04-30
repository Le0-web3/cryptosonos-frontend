import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Groovebox from './Components/Groovebox/Groovebox.js';
import Soundsystem from './Components/Soundsystem/Soundsystem.js';
import Navbar from './Components/Navbar/Navbar.js';
import Rules from './Components/Rules/Rules.js';
import { CONTRACT_ADDRESS, transformNFTData } from './constants';
import myEpicGame from './utils/MyEpicGame.json';
import { BigNumber, ethers } from 'ethers';

const App = () => {

//   -----   WEB3   -----
/*
  * Just a state variable we use to store our user's public wallet. Don't forget to import useState.
  */
const [currentAccount, setCurrentAccount] = useState(null);
// const [characterNFT, setCharacterNFT] = useState(null); // old, hold the owned NFTs
const [characterNFT, setCharacterNFT] = useState([]);
const [characters, setCharacters] = useState([]); // hold the default boxes
const [gameContract, setGameContract] = useState(null);
const [partyState, setPartyState] = useState('');
const [NFTOwned, setNFTOwned] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // used
const [lastParty, setLastParty] = useState(""); // timestamp

// UseEffect
useEffect(() => {
  const { ethereum } = window;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const gameContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      myEpicGame.abi,
      signer
    );

    /*
     * This is the big difference. Set our gameContract in state.
     */
    setGameContract(gameContract);
  } else {
    console.log('Ethereum object not found');
  }
}, []);

useEffect(() => {
  const getBoxes = async () => {
    try {
      console.log('Getting contract boxes to mint');
      /*
       * Call contract to get all mint-able boxes
       */
      const boxesTxn = await gameContract.getAllDefaultBoxes();
      console.log('boxesTxn:', boxesTxn);
      /*
       * Go through all of our boxes and transform the data
       */
      const boxes = boxesTxn.map((boxData) =>
        transformNFTData(boxData)
      );
      /*
       * Set all mint-able characters in state
       */
      setCharacters(boxes);


    } catch (error) {
      console.error('Something went wrong fetching boxes:', error);
    }
  };

  /*
   * Add a callback method that will fire when this event is received
   */
  const onBoxMint = async (sender, tokenId, boxIndex) => {
    console.log(
      `BoxNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} boxIndex: ${boxIndex.toNumber()}`
    );
    alert(`Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${gameContract.toString()}/${tokenId.toNumber()}`);
  }


  const onPartyCompleted = async (timestamp, cooldownRespected) => {
    if(cooldownRespected) {
      console.log(`Party hosted at ${timestamp}`);
      alert(`Party was fire !`);
    } else {
      alert(`Too soon ! People are not back yet !`);
    }
  //  fetchNFTMetadata();
  }
    
    /*
     * Once our box NFT is minted we can fetch the metadata from our contract
     * and set it in state
     */
    /*
    if (gameContract) {
      const boxNFT = await gameContract.checkIfUserHasNFT();
      console.log('boxNFT: ', boxNFT);
      setCharacterNFT(transformNFTData(boxNFT));
    }
  };
  comment out for now */ 

  /*
   * If our gameContract is ready, let's get boxes!
   */
  if (gameContract) {
    getBoxes();
        /*
     * Setup NFT Minted Listener
     */
        gameContract.on('BoxNFTMinted', onBoxMint);
        gameContract.on('PartyComplete', onPartyCompleted);
  }
  return () => {
    /*
     * When your component unmounts, let;s make sure to clean up this listener
     */
    if (gameContract) {
      gameContract.off('BoxNFTMinted', onBoxMint);
      gameContract.off('PartyComplete', onPartyCompleted);
    }
  };
}, [gameContract]);

/*
   * Since this method will take some time, make sure to declare it as async
   */
const checkIfWalletIsConnected = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have MetaMask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      /*
       * User can have multiple authorized accounts, we grab the first one if its there!
       */
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

  /*
  * Implement your connectWallet method here
  */
const connectWalletAction = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');
      return;
    }

    /*
      * Fancy method to request access to account.
      */
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    /*
      * Boom! This should print out public address once we authorize Metamask.
      */
    console.log('Connected', accounts[0]);
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};

/*
 * This runs our function when the page loads.
 */
useEffect(() => {
  checkIfWalletIsConnected();
  checkNetwork();
}, []);

const checkNetwork = async () => {
  try { 
    if (window.ethereum.networkVersion !== '4') {
      alert("Please connect to Rinkeby!")
    }
  } catch(error) {
    console.log(error)
  }
}

/*
 * Add this useEffect right under the other useEffect where you are calling checkIfWalletIsConnected
 */

// fetchNFTMeatadata was declared inside the useEffect where it's used, I pull it off to reuse in mint
const fetchNFTMetadata = async () => {
  console.log('Checking for Character NFT on address:', currentAccount);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const gameContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    myEpicGame.abi,
    signer
  );

      // new
      const txn5 = await gameContract.getTokenIds(currentAccount);
      if(txn5 != null) {
        
        let txn5Cleaned = []; // array of token id
        txn5.forEach(token => {
            txn5Cleaned.push(
            ethers.BigNumber.from(token).toNumber()
          );
        });
        
        console.log("txn5Cleaned : ", txn5Cleaned)
        
        // working until there

        let boxIndexArray = [];
        for(let i = 0; i<txn5Cleaned.length; i++) {
          let boxIndexOwned = await gameContract.getNftHolderAttributes(txn5Cleaned[i]).then(function(receipt){
            console.log("receipt : ",receipt)
            boxIndexArray.push(ethers.BigNumber.from(receipt.boxIndex).toNumber());
            });
        }
        console.log("boxIndexArray : ", boxIndexArray)

        let varNFTOwned = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(let i = 0; i < boxIndexArray.length; i++) {
          varNFTOwned[boxIndexArray[i]] +=1;
        }
        setNFTOwned(varNFTOwned);
        console.log("varNFTOwned : ", varNFTOwned)
        console.log("NFTOwned : ", NFTOwned)
// TIMESTAMP
        let lastTimestampTxn = await gameContract.lastHostedAt(currentAccount);
        let lastTimestamp = ethers.BigNumber.from(lastTimestampTxn).toNumber();
        var date = new Date(lastTimestamp * 1000);
        setLastParty(date.toString().slice(0, 24));
      } else {
        console.log("no token id");
      }

}; // fetchNFTMetadata


useEffect(() => {
  /*
   * The function we will call that interacts with out smart contract
   */
  /*
   * We only want to run this, if we have a connected wallet
   */
  if (currentAccount) {
    console.log('CurrentAccount:', currentAccount);
    fetchNFTMetadata();
  }
}, [currentAccount]);

  /*
   * Create a method that gets all waves from your contract
   */
  const getOwnerNFT = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const gameContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myEpicGame.abi,
          signer
        );

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const boxes = await gameContract.getAllOwnedBoxes(currentAccount);
        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let boxesCleaned = [];
        boxes.forEach(box => {
          boxesCleaned.push({
            frequence: box.frequence,
            mood: box.mood
          });
        });

        /*
         * Store our data in React State
         */
        setCharacters(boxesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }

// Actions
const mintBoxNFTAction = (boxId) => async () => {
  try {
    if (gameContract) {
      console.log('Minting character in progress...');
      const mintTxn = await gameContract.mintBoxNFT(boxId);
      await mintTxn.wait();
      console.log('mintTxn:', mintTxn);
      fetchNFTMetadata(); // new
      

    }
  } catch (error) {
    console.warn('MintBoxAction Error:', error);
  }
};

const hostAPartyAction = (probatomint) => async () => {
  try {
    if (gameContract) {
      setPartyState('partying');
      console.log('Party in progress...');
      const partyTxn = await gameContract.hostAParty(probatomint, {gasLimit:500000});
      await partyTxn.wait();
      console.log('partyTxn:', partyTxn);
      setPartyState('');
      fetchNFTMetadata(); // new
    }
  } catch (error) {
    console.warn('hostAPartyAction Error:', error);
    setPartyState('');
  }
};

  //    -----   USE STATE   -----
  const [view, setView] = useState("home");
  const [mood, setMood] = useState("tekno");
  const [bpm, setBpm] = useState(120); 
  const [sequence, setSequence] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [builded, setBuilded] = useState({
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
  const [sequenceRating, setSequenceRating] = useState(0);
  const [soundSystemRating, setSoundSystemRating] = useState(0);

  //   -----   USE EFFFECT   -----
  /*
  useEffect(() => {
    fetchNFTMetadata();
}, [view]);
*/

  // STATE FUNCTIONS
    // navigation
  const handleClickView = (event) => {
    setView(event.target.id.slice(0, -4));
  }

  // RENDER
  const renderContent = () => {
    if (view === "home") {
      return <Home handleClickView={handleClickView}
      mood={mood}
      setMood={setMood}
      bpm={bpm}
      setBpm={setBpm}
      sequence={sequence}
      setSequence={setSequence}
      builded={builded}
      setBuilded={setBuilded}
      sequenceRating={sequenceRating}
      setSequenceRating={setSequenceRating}
      hostAPartyAction={hostAPartyAction}
      partyState={partyState}
      characterNFT={characterNFT}
      NFTOwned={NFTOwned}
      setNFTOwned={setNFTOwned}
      soundSystemRating={soundSystemRating}
      lastParty={lastParty}
      />;
    }
    else if(view === "groovebox") {
      return <Groovebox 
      mood={mood}
      setMood={setMood}
      bpm={bpm}
      setBpm={setBpm}
      sequence={sequence}
      setSequence={setSequence}
      sequenceRating={sequenceRating}
      setSequenceRating={setSequenceRating}
      view={view}
      />;
    }
    else if(view === "soundsystem") {
      return <Soundsystem
      builded={builded}
      setBuilded={setBuilded}
      NFTOwned={NFTOwned}
      soundSystemRating={soundSystemRating}
      setSoundSystemRating={setSoundSystemRating}
      mood={mood}
       />;
    }
    else if(view === "rules") {
      return <Rules />;
    }
  } // rendercontent




  return (
  <div>
    
    <Navbar handleClickView={handleClickView} connectWalletAction={connectWalletAction} currentAccount={currentAccount} />
    
    <div id="content">
      {renderContent()}
    </div>
  </div>
  )

} // App

export default App;
