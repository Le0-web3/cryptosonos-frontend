const CONTRACT_ADDRESS = '0xff71135182A3198EC73F68d681fae5BF3fa646CF';

const transformNFTData = (NFTData) => {
    return {
   //   boxIndex: NFTData.boxIndex.toNumber(),
      frequence: NFTData.frequence,
      mood: NFTData.mood,
      imageURI: NFTData.imageURI,
    };
  };
  
  export { CONTRACT_ADDRESS, transformNFTData };