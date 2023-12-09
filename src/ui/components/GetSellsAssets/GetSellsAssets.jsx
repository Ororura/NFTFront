import Container from "../HOC/Container";
import {Card} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";

const GetSellsAssets = () => {
  const {allAssetsState} = useContext(Context);
  const [sellsState, setSellsState] = useState([]);

  useEffect(() => {
    (async () => {
      const sells = await Service.getSellsArray();
      setSellsState(sells);
    })();
  }, []);

  return (
      <>
        {sellsState.length > 0 && (
            <Container>
              <p className="text-center">NFT на торговой площадке</p>
              {sellsState.map((el) => {
                const correspondingAsset = allAssetsState.find((all) => all.idx === el.assetIdx);
                console.log(el)
                if (correspondingAsset) {
                  return (
                      <Card key={correspondingAsset.id} style={{width: '18rem', margin: "20px"}}>
                        <Card.Img variant="top" src={`assets/${correspondingAsset.img}`}/>
                        <Card.Body>
                          <Card.Title>NFT</Card.Title>
                          <Card.Text>ID: {correspondingAsset.assetIdx}</Card.Text>
                          <Card.Text>Название: {correspondingAsset.name}</Card.Text>
                          <Card.Text>Описание: {correspondingAsset.desc}</Card.Text>
                          <Card.Text>Цена: {el.price}</Card.Text>
                          <Card.Text>Кол-во токенов: {correspondingAsset.releasedAmount}</Card.Text>
                          <Card.Text>Время
                            создания: {new Date(correspondingAsset.dateCreate * 1000).toISOString()}</Card.Text>
                        </Card.Body>
                      </Card>
                  );
                }
                return null;
              })}
            </Container>
        )}
      </>
  );
};

export default GetSellsAssets;
