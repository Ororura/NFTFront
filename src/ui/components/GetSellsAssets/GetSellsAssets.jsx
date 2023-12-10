import Container from "../HOC/Container";
import {Button, Card, Form} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";

const GetSellsAssets = () => {
  const {allAssetsState, walletState, discountState} = useContext(Context);
  const [sellsState, setSellsState] = useState([]);
  const [amountState, setAmountState] = useState(0);

  useEffect(() => {
    (async () => {
      const sells = await Service.getSellsArray();
      setSellsState(sells);
    })();
  }, []);

  const handler = async (e, id, amount) => {
    e.preventDefault();
    await Service.buyNFT(id, amount, discountState, walletState);
  }

  return (<>
        <Container>
          <p className="text-center">NFT на торговой площадке</p>
          {sellsState.map((el, idx) => {
            const correspondingAsset = allAssetsState.find((all) => all.idx === el.assetIdx);
            let id = 0;
            if (correspondingAsset) {
              return (<>
                    {el.price !== "0" && <Card key={correspondingAsset.idx} style={{width: '18rem', margin: "20px"}}>
                      <Card.Text>ID лота: {idx}</Card.Text>
                      <Card.Img variant="top" src={`assets/${correspondingAsset.img}`}/>
                      <Card.Body>
                        <Card.Title>NFT</Card.Title>
                        <Card.Text>ID: {correspondingAsset.idx}</Card.Text>
                        <Card.Text>Название: {correspondingAsset.name}</Card.Text>
                        <Card.Text>Описание: {correspondingAsset.desc}</Card.Text>
                        <Card.Text>Цена: {el.price / 10 ** 6}</Card.Text>
                        <Card.Text>Кол-во токенов: {correspondingAsset.releasedAmount}</Card.Text>
                        <Card.Text>Время
                          создания: {new Date(correspondingAsset.dateCreate * 1000).toISOString()}</Card.Text>
                      </Card.Body>
                      <Form.Label>Купить NFT</Form.Label>
                      <Form.Control onChange={(e) => {
                        setAmountState(e.target.value)
                      }} type="number" placeholder="Введите кол-во токенов"></Form.Control>
                      <Button onClick={async (e) => {
                        console.log(idx)
                        await handler(e, idx, amountState)
                      }}>Купить</Button>
                    </Card>
                    }
                  </>);
            }
            return null;
          })}
        </Container>
        )
      </>);
};

export default GetSellsAssets;
