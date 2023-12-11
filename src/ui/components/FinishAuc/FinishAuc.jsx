import React, { useContext } from "react";
import { Context } from "../../../core/Context";
import Service from "../../../services/Service";
import Container from "../HOC/Container";
import { Button, Form } from "react-bootstrap";

const FinishAuc = () => {
  const { walletState } = useContext(Context);
  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.finishAuc(target.id.value, walletState);
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Text>Завершить аукцион</Form.Text>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Введите id аукциона</Form.Label>
          <Form.Control type="number" placeholder="Id" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Завершить
        </Button>
      </Form>
    </Container>
  );
};

export default FinishAuc;
