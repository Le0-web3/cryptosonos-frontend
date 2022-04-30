const CONTRACT_ADDRESS = '0xdefa3De072ef1c9243D63C03Dd1d8acA8B1164e4';

const transformNFTData = (NFTData) => {
    return {
   //   boxIndex: NFTData.boxIndex.toNumber(),
      frequence: NFTData.frequence,
      mood: NFTData.mood,
      imageURI: NFTData.imageURI,
    };
  };
  
  export { CONTRACT_ADDRESS, transformNFTData };