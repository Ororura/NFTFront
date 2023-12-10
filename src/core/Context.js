import React, { createContext, useEffect, useState } from "react";
import Service from "../services/Service";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [walletState, setWalletState] = useState("");
  const [userNFTState, setUserNFTState] = useState([]);
  const [allAssetsState, setAllAssetsState] = useState([]);
  const [discountState, setDiscountState] = useState("0");
  const [refState, setRefState] = useState("");
  const [betState, setBetState] = useState([]);
  const [timeState, setTimeState] = useState(0);

  useEffect(() => {
    (async () => {
      const nftData = await Service.getUserAssets(walletState);
      setUserNFTState(nftData);

      const assets = await Service.getArrayAsset();
      setAllAssetsState(assets);
    })();
  }, [walletState]);

  const getRef = async () => {
    const data = await Service.getUserReferral(walletState);
    setRefState(data);
  };

  const getBet = async (id, e) => {
    const bets = await Service.getBet(0);
    setBetState(bets);
  };

  const updateDiscount = async () => {
    const discount = await Service.getDiscount(refState);
    setDiscountState(discount);
  };

  const getTime = async () => {
    const time = await Service.getTime();
    setTimeState(time);
  };

  const connect = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((ac) => {
      setWalletState(ac[0]);
    });
  };

  const values = {
    walletState,
    connect,
    userNFTState,
    setWalletState,
    allAssetsState,
    discountState,
    updateDiscount,
    betState,
    getBet,
    getRef,
    refState,
    getTime,
    timeState,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
