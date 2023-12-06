import React, {createContext, useState} from "react";
import Service from "../services/Service";

export const Context = createContext({});

export const ContextWrapper = ({children}) => {
    const [walletState, setWalletState] = useState("");
    const [NFTState, setNFTState] = useState([]);

    const connect = () => {
        window.ethereum.request({method: "eth_requestAccounts"}).then((ac) => {
            setWalletState(ac[0]);
        });
    };

    const getNFTAsset = async (id) => {
        const data = await Service.getAsset(id, walletState);
        setNFTState(data);
    }

    const values = {walletState, connect, getNFTAsset, NFTState, setWalletState};
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
