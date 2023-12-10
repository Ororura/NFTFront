import React from "react";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import GetSellsAssets from "../../components/GetSellsAssets/GetSellsAssets";
import TransferNft from "../../components/TransferNFT/TransferNFT";
import SellNFT from "../../components/SellNFT/SellNFT";

const MarketPlace = () => {
  return (<div className="main-wrapper">
    <TransferNft/>
    <GetSellsAssets/>
    <SellNFT/>
    <CreateNFT/>
    <CreateCollection/>
  </div>)
}

export default MarketPlace;