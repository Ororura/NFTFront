import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../HOC/Container";
import Service from "../../../services/Service";
import { Context } from "../../../core/Context";

const StartAuc = () => {
  const { walletState, getTime, timeState } = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await getTime();
    console.log(timeState);
    await Service.startAuc(
      target.id.value,
      target.start.value * 60,
      target.end.value * 60,
      target.price.value,
      walletState,
    );
    console.log(target.start.value * 60 + Number(timeState));
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Text>Запустить аукцион</Form.Text>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Введите id коллекции</Form.Label>
          <Form.Control type="number" placeholder="Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="start">
          <Form.Label>Введите время начала</Form.Label>
          <Form.Control type="number" placeholder="Минуты" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="end">
          <Form.Label>Введите время конца</Form.Label>
          <Form.Control type="number" placeholder="Минуты" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Введите максимальную цену</Form.Label>
          <Form.Control type="number" placeholder="PROFI" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
    </Container>
  );
};

export default StartAuc;
