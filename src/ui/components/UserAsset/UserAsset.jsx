import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import Container from "../HOC/Container";
import { Context } from "../../../core/Context";

const UserAsset = () => {
  const { userNFTState } = useContext(Context);

  return (
      <>
        {userNFTState.length > 0 && (
            <Container>
              <p className="text-center">Ваши NFT</p>
              {userNFTState.map((el) => (
                  <Card key={el.id} style={{ width: '18rem', margin: "20px"}}>
                    <Card.Img variant="top" src={`assets/${el.img}`} />
                    <Card.Body>
                      <Card.Title>NFT</Card.Title>
                      <Card.Text>ID: {el.idx}</Card.Text>
                      {el.collectionId >= 0 && <Card.Text>ID коллекции: {el.collectionId}</Card.Text>}
                      <Card.Text>Название: {el.name}</Card.Text>
                      <Card.Text>Описание: {el.desc}</Card.Text>
                      <Card.Text>Цена: {el.price}</Card.Text>
                      <Card.Text>Кол-во токенов: {el.releasedAmount}</Card.Text>
                      <Card.Text>Время создания: {new Date(el.dateCreate * 1000).toISOString()}</Card.Text>
                    </Card.Body>
                  </Card>
              ))}
            </Container>
        )}
      </>
  );
};

export default UserAsset;
