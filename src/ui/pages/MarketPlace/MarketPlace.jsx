import React from "react";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import GetSellsAssets from "../../components/GetSellsAssets/GetSellsAssets";

const MarketPlace = () => {
  return (<div className="main-wrapper">
    <GetSellsAssets/>
    <CreateNFT/>
    <CreateCollection/>
  </div>)
}

export default MarketPlace;