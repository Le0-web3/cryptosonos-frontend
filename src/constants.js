const CONTRACT_ADDRESS = '0x44171e58F86cc2E6EC063eF022C83c9c66F3e1FE';

const transformNFTData = (NFTData) => {
    return {
   //   boxIndex: NFTData.boxIndex.toNumber(),
      frequence: NFTData.frequence,
      mood: NFTData.mood,
      imageURI: NFTData.imageURI,
    };
  };
  
  export { CONTRACT_ADDRESS, transformNFTData };