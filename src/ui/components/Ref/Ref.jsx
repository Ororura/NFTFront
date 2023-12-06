import {Button, FormGroup} from "react-bootstrap";
import React, {useContext, useState} from "react";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";
import {Form} from "react-bootstrap";
import Container from "../HOC/Container";

const Ref = () => {
    const [refState, setRefState] = useState("");
    const {walletState} = useContext(Context);

    const handlerCreateRef = async () => {
        await Service.createRef(walletState);
    };

    const handlerGetRef = async () => {
        const data = await Service.getUserReferral(walletState);
        console.log(data);
        setRefState(data);
    };

    const handlerUseReferral = async (e) => {
        const {target} = e;
        e.preventDefault();
        Service.referralUse(target.referrals.value, walletState);
    }
    return (
        <Container>
            <Button style={{margin: "10px"}} onClick={handlerCreateRef} variant="primary" type="submit">
                Создать рефералку
            </Button>

            <Button onClick={handlerGetRef} type="submit">
                Узнать свой реферальный код
            </Button>
            <p className="text-center">{refState}</p>
            <Form onSubmit={handlerUseReferral}>
                <FormGroup controlId="controlId">
                    <Form.Label>Использовать промокод</Form.Label>
                    <Form.Control type="text" placeholder="Введите промокод"></Form.Control>
                    <Button type="submit">Использовать</Button>
                </FormGroup>
            </Form>
        </Container>
    );
};

export default Ref;
