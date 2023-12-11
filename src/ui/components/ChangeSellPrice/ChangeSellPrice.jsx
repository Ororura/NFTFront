import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../HOC/Container";
import { Context } from "../../../core/Context";
import Service from "../../../services/Service";

const ChangeSellPrice = () => {
  const { walletState } = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.changeSellPrice(
      target.id.value,
      target.price.value,
      walletState,
    );
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Text>Изменить цену</Form.Text>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Введите id товара</Form.Label>
          <Form.Control type="number" placeholder="Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Введите Цену</Form.Label>
          <Form.Control type="number" placeholder="PROFI" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Изменить цену
        </Button>
      </Form>
    </Container>
  );
};

export default ChangeSellPrice;
