import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../HOC/Container";
import { Context } from "../../../core/Context";
import Service from "../../../services/Service";

const AddUserRef = () => {
  const { walletState } = useContext(Context);

  const handler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await Service.addUsersRef(target.id.value, walletState);
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Form.Text>Добавить пользователя в реферал</Form.Text>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Введите адрес</Form.Label>
          <Form.Control type="text" placeholder="address" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </Container>
  );
};

export default AddUserRef;
