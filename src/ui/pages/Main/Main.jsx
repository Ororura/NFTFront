import React, {useContext} from "react";
import {Context} from "../../../core/Context";
import Ref from "../../components/Ref/Ref";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import GetAsset from "../../components/GetAsset/GetAsset";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import GetCollectionAsset from "../../components/getCollections/GetCollectionAsset";

const Main = () => {
    const {walletState} = useContext(Context);
    return (
        <div className="main-wrapper">
            {walletState}
            <CreateNFT/>
            <CreateCollection/>
            <Ref></Ref>
            <GetAsset/>
            <GetCollectionAsset/>
        </div>
    );
};

export default Main;
