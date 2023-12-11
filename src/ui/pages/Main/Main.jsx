import React, { useContext } from "react";
import { Context } from "../../../core/Context";
import Ref from "../../components/Ref/Ref";
import UserAsset from "../../components/UserAsset/UserAsset";
import Info from "../../components/Info/Info";
import AddUserRef from "../../components/AddUserRef/AddUserRef";

const Main = () => {
  const { walletState } = useContext(Context);
  return (
    <div className="main-wrapper">
      {walletState !== "" && <Info />}
      <Ref />
      <AddUserRef />
      <UserAsset />
    </div>
  );
};

export default Main;
