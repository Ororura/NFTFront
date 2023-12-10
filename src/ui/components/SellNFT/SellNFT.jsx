import React, {useContext} from 'react';
import Container from "../HOC/Container";
import {Button, Form} from "react-bootstrap";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";


const SellNFT = () => {
  const {walletState} = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const {target} = e;
    await Service.sellNFT(target.id.value, target.amount.value, target.price.value, walletState);
  }

  return (
      <Container>
        <Form onSubmit={handler}>
          <Form.Text>Выставить на продажу NFT</Form.Text>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Введите ID NFT</Form.Label>
            <Form.Control type="number" placeholder="Id"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Введите кол-во NFT</Form.Label>
            <Form.Control type="number" placeholder="Кол-во"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Введите цену</Form.Label>
            <Form.Control type="number" placeholder="Цена"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Выставить
          </Button>
        </Form>
      </Container>
  );
};

export default SellNFT;