import React, {useContext} from 'react';
import Container from "../HOC/Container";
import {Button, Form} from "react-bootstrap";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";


const TransferNft = () => {
  const {walletState} = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const {target} = e;
    await Service.transferNFT(target.id.value, target.receiver.value, target.amount.value, walletState);
  }

  return (
      <Container>
        <Form onSubmit={handler}>
          <Form.Text>Перевести NFT</Form.Text>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Введите ID NFT</Form.Label>
            <Form.Control type="number" placeholder="Id"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="receiver">
            <Form.Label>Введите получателя</Form.Label>
            <Form.Control type="text" placeholder="Адрес"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Введите кол-во NFT</Form.Label>
            <Form.Control type="number" placeholder="Вол-во"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Container>
  );
};

export default TransferNft;