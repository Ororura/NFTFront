import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../HOC/Container";
import Service from "../../../services/Service";
import { Context } from "../../../core/Context";

const CreateNFT = () => {
  const { walletState } = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.createNFT(
      target.name.value,
      target.desc.value,
      target.img.value,
      target.price.value,
      target.amount.value,
      walletState,
    );
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Label>Создать NFT</Form.Label>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Введите название</Form.Label>
          <Form.Control type="text" placeholder="Название" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Введите описание</Form.Label>
          <Form.Control type="text" placeholder="Описание" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="img">
          <Form.Label>Введите название картинки</Form.Label>
          <Form.Control type="text" placeholder="картинка.png" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Введите цену</Form.Label>
          <Form.Control type="text" placeholder="Цена" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Кол-во токенов</Form.Label>
          <Form.Control type="number" placeholder="Кол-во" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
    </Container>
  );
};

export default CreateNFT;
