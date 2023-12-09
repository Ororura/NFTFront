import React, {useContext, useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import Container from "../HOC/Container";
import {Context} from "../../../core/Context";
import Service from "../../../services/Service";

const GetCollectionAsset = () => {
    const {walletState, NFTState} = useContext(Context);
    const [collectionState, setCollectionState] = useState([]);

    const handler = async (e) => {
        e.preventDefault()
        const {target} = e;
        const data = await Service.getCollectionAsset();
        console.log(data)
        setCollectionState(data);
        console.log(collectionState)

    }
    return (
        <Container>
            <Form onSubmit={handler}>
                <Form.Text>Получить коллекции</Form.Text>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Введите Id коллекции</Form.Label>
                    <Form.Control type="number" placeholder="id"/>
                </Form.Group>
                <Button type="submit">Получить данные о коллекции</Button>
            </Form>
            {collectionState[0] !== undefined && <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>NFT</Card.Title>
                    <Card.Text>ID: {collectionState[0].id}</Card.Text>
                    <Card.Text>Название: {collectionState[0].name}</Card.Text>
                    <Card.Text>Описание: {collectionState[0].desc}</Card.Text>
                    <Card.Text>Цена: {collectionState[0].amounts}</Card.Text>
                    <Card.Text>Кол-во токенов: {collectionState[0].ids}</Card.Text>
                </Card.Body>
            </Card>}
        </Container>)
}

export default GetCollectionAsset;