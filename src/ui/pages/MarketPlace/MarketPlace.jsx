import React from "react";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import GetSellsAssets from "../../components/GetSellsAssets/GetSellsAssets";
import TransferNft from "../../components/TransferNFT/TransferNFT";
import SellNFT from "../../components/SellNFT/SellNFT";
import GetBet from "../../components/GetBet/GetBet";
import Auc from "../../components/Auc/Auc";
import Bet from "../../components/Bet/Bet";
import StartAuc from "../../components/StartAuc/StartAuc";
import UpBet from "../../components/UpBet/UpBet";
import ChangeSellPrice from "../../components/ChangeSellPrice/ChangeSellPrice";
import FinishAuc from "../../components/FinishAuc/FinishAuc";

const MarketPlace = () => {
  return (
    <div className="main-wrapper">
      <Auc />
      <Bet />
      <UpBet />
      <GetBet />
      <StartAuc />
      <FinishAuc />
      <TransferNft />
      <GetSellsAssets />
      <SellNFT />
      <ChangeSellPrice />
      <CreateNFT />
      <CreateCollection />
    </div>
  );
};

export default MarketPlace;
