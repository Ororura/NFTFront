import React, {useContext, useState} from 'react';
import Container from "../HOC/Container";
import Service from "../../../services/Service";
import {Button, Card, Form} from "react-bootstrap";
import {Context} from "../../../core/Context";



const Auc = () => {
  const {betState} = useContext(Context);
  const [idAucState, setIdAucState] = useState(0);
  const [aucState, setAucState] = useState([])
  const [sortedState, setSortedState] = useState([]);

  const handlerGetAuc = async (e, id) => {
    e.preventDefault();
    const aucData = await Service.getAuctionArray(id)
    if (aucData) {
      setAucState(aucData)
      const sortedBets = [...betState].sort((a, b) => b.amount - a.amount);
      const topThreeBets = sortedBets.slice(0, 3);
      setSortedState(topThreeBets)
    }
  }

  return (<Container>
    <Form.Group>
      <Form.Label>Введите Id аукциона</Form.Label>
      <Form.Control onChange={(e) => {
        setIdAucState(e.target.value)
      }} placeholder="Id"></Form.Control>
      <Button onClick={(e) => {
        handlerGetAuc(e, idAucState)
      }}>Узнать</Button>
    </Form.Group>

    {aucState.length > 0 &&
        <Card key={aucState.collectionId} style={{width: '18rem', margin: "20px"}}>
          <Card.Body>
            <Card.Title>NFT</Card.Title>
            <Card.Text>ID коллекции: {aucState.collectionId}</Card.Text>
            {/*<Card.Text>Название: {aucState.name}</Card.Text>*/}
            {/*<Card.Text>Описание: {aucState.desc}</Card.Text>*/}
            <Card.Text>Текущий лидер: {aucState.leader}</Card.Text>
            <Card.Text>Текущая ставка: {aucState.currentBet}</Card.Text>
            <Card.Text>Максимальная ставка: {aucState.maxPrice / 10 ** 6}</Card.Text>
            <Card.Text>Время старта: {new Date(aucState.timeStart * 1000).toISOString()}</Card.Text>
            <Card.Text>Время завершения: {new Date(aucState.timeEnd * 1000).toISOString()}</Card.Text>
            {sortedState.map((el, idx) => (<Card.Text> Позиция: {idx + 1} Ставка: {el.amount}</Card.Text>))}

          </Card.Body>
        </Card>
    }

  </Container>);
};

export default Auc;