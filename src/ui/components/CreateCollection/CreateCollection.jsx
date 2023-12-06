import React, {useContext} from "react";
import Container from "../HOC/Container";
import {Button, Form} from "react-bootstrap";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";

const CreateCollection = () => {
    const {walletState} = useContext(Context);
    const handler = async (e) => {
        e.preventDefault()
        const {target} = e;
        await Service.createCollection(target.id.value, target.name.value, target.desc.value, target.ids.value.split(" "), target.price.value.split(" "), walletState)
    }

    return (<Container>
        <Form onSubmit={handler}>
            <Form.Text>Создать коллекцию</Form.Text>
            <Form.Group className="mb-3" controlId="id">
                <Form.Label>Введите Id</Form.Label>
                <Form.Control type="text" placeholder="id"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Введите название</Form.Label>
                <Form.Control type="text" placeholder="Название"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="desc">
                <Form.Label>Введите описание</Form.Label>
                <Form.Control type="text" placeholder="Описание"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ids">
                <Form.Label>Введите id коллекций</Form.Label>
                <Form.Control type="text" placeholder="ids"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Введите цены для коллекций</Form.Label>
                <Form.Control type="text" placeholder="Цена"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Создать
            </Button>
        </Form>
    </Container>)
}

export default CreateCollection;