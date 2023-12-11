import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../HOC/Container";
import Service from "../../../services/Service";
import { Context } from "../../../core/Context";

const UpBet = () => {
  const { walletState } = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.upBet(target.id.value, target.bet.value, walletState);
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Text>Повысить ставку</Form.Text>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Введите id аукциона</Form.Label>
          <Form.Control type="number" placeholder="Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bet">
          <Form.Label>Введите ставку</Form.Label>
          <Form.Control type="number" placeholder="PROFI" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Повысить
        </Button>
      </Form>
    </Container>
  );
};

export default UpBet;
