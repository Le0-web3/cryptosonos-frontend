import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Groovebox from './Components/Groovebox/Groovebox.js';
import Soundsystem from './Components/Soundsystem/Soundsystem.js';
import Navbar from './Components/Navbar/Navbar.js';
import Rules from './Components/Rules/Rules.js';
import { CONTRACT_ADDRESS } from './constants';
import myEpicGame from './utils/MyEpicGame.json';
import { BigNumber, ethers } from 'ethers';

const App = () => {

//   -----   WEB3 USE STATE  -----
/*
  * Just a state variable we use to store our user's public wallet. Don't forget to import useState.
  */
const [currentAccount, setCurrentAccount] = useState(null);
const [gameContract, setGameContract] = useState(null);
const [partyState, setPartyState] = useState('');
const [NFTOwned, setNFTOwned] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // used
const [lastParty, setLastParty] = useState(""); // timestamp

//   -----   WEB3 USE EFFECT   -----
//   -----   gameContract   -----
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
    setGameContract(gameContract);
  } else {
    console.log('Ethereum object not found');
  }
}, []);

// ---   events   ---
useEffect(() => {
// Add a callback method that will fire when this event is received
  const onBoxMint = async (sender, tokenId, boxIndex) => {
    console.log(`BoxNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} boxIndex: ${boxIndex.toNumber()}`);
    alert(`Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${gameContract.toString()}/${tokenId.toNumber()}`);
  }
  const onPartyCompleted = async (timestamp, cooldownRespected) => {
    if(cooldownRespected) {
      console.log(`Party hosted at ${timestamp}`);
      alert(`Party was fire !`);
    } else {
      alert(`Too soon ! People are not back yet !`);
    }
  }
// set up event listeners
  if (gameContract) {
      gameContract.on('BoxNFTMinted', onBoxMint);
      gameContract.on('PartyComplete', onPartyCompleted);
  }
// clean event listeners when unmount
  return () => {
    if (gameContract) {
      gameContract.off('BoxNFTMinted', onBoxMint);
      gameContract.off('PartyComplete', onPartyCompleted);
    }
  };
}, [gameContract]);

//   -----   Checking account and chain   -----
useEffect(() => {
  checkIfWalletIsConnected();
  checkNetwork();
}, []);

//   -----   checking owned NFT   -----
useEffect(() => {
   // We only want to run this, if we have a connected wallet
  if (currentAccount) {
    console.log('CurrentAccount:', currentAccount);
    fetchNFTMetadata();
  }
}, [currentAccount]);

//   -----   WEB3 METHODS   -----
// Since this method will take some time, make sure to declare it as async
const checkIfWalletIsConnected = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have MetaMask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
       // Check if we're authorized to access the user's wallet
      const accounts = await ethereum.request({ method: 'eth_accounts' });
       // User can have multiple authorized accounts, we grab the first one if its there!
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

const checkNetwork = async () => {
  const { ethereum } = window;
  let chainId = await ethereum.request({ method: 'eth_chainId' });
  console.log("Connected to chain " + chainId);

  // String, hex code of the chainId of the Rinkebey test network
  const rinkebyChainId = "0x4"; 
  if (chainId !== rinkebyChainId) {
    alert("You are not connected to the Rinkeby Test Network!");
  }
}

//   -----   fetching users' data on chain   -----
const fetchNFTMetadata = async () => {
  console.log('Checking for Character NFT on address:', currentAccount);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const gameContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    myEpicGame.abi,
    signer
  );
      const txn5 = await gameContract.getTokenIds(currentAccount);
      if(txn5 != null) {
        let txn5Cleaned = []; // array of token id
        txn5.forEach(token => {
            txn5Cleaned.push(
            ethers.BigNumber.from(token).toNumber()
          );
        });
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
        console.log("NFTOwned : ", NFTOwned)
        let lastTimestampTxn = await gameContract.lastHostedAt(currentAccount);
        let lastTimestamp = ethers.BigNumber.from(lastTimestampTxn).toNumber();
        var date = new Date(lastTimestamp * 1000);
        setLastParty(date.toString().slice(0, 24));
      } else {
        console.log("no token id");
      }
}; // fetchNFTMetadata

//   -----   WEB3 ACTIONS   -----
const connectWalletAction = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      alert('Get MetaMask!');
      return;
    }
  // request access to account.
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log('Connected', accounts[0]);
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);
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
      // setMood={setMood}
      bpm={bpm}
      // setBpm={setBpm}
      sequence={sequence}
      // setSequence={setSequence}
      builded={builded}
      // setBuilded={setBuilded}
      sequenceRating={sequenceRating}
      setSequenceRating={setSequenceRating}
      hostAPartyAction={hostAPartyAction}
      partyState={partyState}
      NFTOwned={NFTOwned}
      // setNFTOwned={setNFTOwned}
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
      // view={view}
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
