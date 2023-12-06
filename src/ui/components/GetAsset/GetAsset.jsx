import React, {useContext} from "react";
import {Button, Card, Form} from "react-bootstrap";
import Container from "../HOC/Container";
import {Context} from "../../../core/Context";

const GetAsset = () => {
    const {NFTState, getNFTAsset} = useContext(Context);
    const handler = async (e) => {
        e.preventDefault();
        const {target} = e;
        await getNFTAsset(target.id.value);
        console.log(NFTState)
    }

    return (
        <Container>
            <Form onSubmit={handler}>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Введите Id</Form.Label>
                    <Form.Control type="number" placeholder="id"/>
                </Form.Group>
                <Button type="submit">Получить данные NFT</Button>
            </Form>
            {NFTState.name !== undefined && <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={`assets/${NFTState.img}`}></Card.Img>
                <Card.Body>
                    <Card.Title>NFT</Card.Title>
                    <Card.Text>ID: {NFTState.id}</Card.Text>
                    <Card.Text>Название: {NFTState.name}</Card.Text>
                    <Card.Text>Описание: {NFTState.desc}</Card.Text>
                    <Card.Text>Цена: {NFTState.price}</Card.Text>
                    <Card.Text>Кол-во токенов: {NFTState.releasedAmount}</Card.Text>
                    <Card.Text>Время создания: {new Date(NFTState.dateCreate * 1000).toISOString()}</Card.Text>
                </Card.Body>
            </Card>}
        </Container>
    )
}

export default GetAsset