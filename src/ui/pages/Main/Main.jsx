import React, {useContext} from "react";
import {Context} from "../../../core/Context";
import Ref from "../../components/Ref/Ref";
import UserAsset from "../../components/UserAsset/UserAsset";
import Info from "../../components/Info/Info";
import GetSellsAssets from "../../components/GetSellsAssets/GetSellsAssets";

const Main = () => {
  const {walletState} = useContext(Context);
  return (
      <div className="main-wrapper">
        {walletState !== "" && <Info/>}
        <Ref/>
        <UserAsset/>
      </div>
  );
};

export default Main;
