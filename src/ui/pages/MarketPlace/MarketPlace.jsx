import React from "react";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import GetSellsAssets from "../../components/GetSellsAssets/GetSellsAssets";
import TransferNft from "../../components/TransferNFT/TransferNFT";
import SellNFT from "../../components/SellNFT/SellNFT";
import GetBet from "../../components/GetBet/GetBet";
import Auc from "../../components/Auc/Auc";

const MarketPlace = () => {
  return (<div className="main-wrapper">
    <Auc></Auc>
    <GetBet></GetBet>
    <TransferNft/>
    <GetSellsAssets/>
    <SellNFT/>
    <CreateNFT/>
    <CreateCollection/>
  </div>)
}

export default MarketPlace;