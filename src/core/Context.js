import React, {createContext, useEffect, useState} from "react";
import Service from "../services/Service";

export const Context = createContext({});

export const ContextWrapper = ({children}) => {
  const [walletState, setWalletState] = useState("");
  const [userNFTState, setUserNFTState] = useState([]);
  const [allAssetsState, setAllAssetsState] = useState([])


  useEffect(() => {
    (async () => {
      const nftData = await Service.getUserAssets(walletState);
      setUserNFTState(nftData)

      const assets = await Service.getArrayAsset();
      setAllAssetsState(assets)
    })()
  }, [walletState])

  const connect = () => {
    window.ethereum.request({method: "eth_requestAccounts"}).then((ac) => {
      setWalletState(ac[0]);
    });
  };


  const values = {walletState, connect, userNFTState, setWalletState, allAssetsState};
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
