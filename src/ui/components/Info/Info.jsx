import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../core/Context";
import Container from "../HOC/Container";
import Service from "../../../services/Service";


const Info = () => {
  const [balanceState, setBalanceState] = useState("")
  const {walletState} = useContext(Context);

  useEffect(() => {
    (async () => {
      const balance = await Service.getBalance(walletState);
      setBalanceState(balance)
    })()
  }, [walletState]);

  return (
      <Container>
        <p>Ваш адрес: {walletState}</p>
        <p>Ваш PROFI баланс: {balanceState / 10 ** 6}</p>
      </Container>
  );
};

export default Info