import {Button, Form, FormGroup} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import Service from "../../../services/Service";
import {Context} from "../../../core/Context";
import Container from "../HOC/Container";

const Ref = () => {
      const {walletState, updateDiscount, discountState, getRef, refState} = useContext(Context);

      const handlerCreateRef = async () => {
        await Service.createRef(walletState);
      };

      const handlerGetRef = async () => {
        await getRef();
      };

      const handlerUpdateDiscount = async (e) => {
        e.preventDefault();
        await updateDiscount();
      }

      const handlerUseReferral = async (e) => {
        const {target} = e;
        e.preventDefault();
        await Service.referralUse(target.referrals.value, walletState);
      }

      return (
        <Container>
          <Button
            style={{ margin: "10px" }}
            onClick={handlerCreateRef}
            variant="primary"
            type="submit"
          >
            Создать рефералку
          </Button>
          <Button
            style={{ margin: "10px" }}
            onClick={handlerGetRef}
            type="submit"
          >
            Узнать свой реферальный код
          </Button>
          {refState !== "" && (
            <Button style={{ margin: "10px" }} onClick={handlerUpdateDiscount}>
              Узнать процент скидки
            </Button>
          )}
          {discountState !== "" && (
            <p className="text-center">Ваш процент скидки: {discountState}</p>
          )}
          <p className="text-center">{refState}</p>
          <Form onSubmit={handlerUseReferral}>
            <FormGroup controlId="referrals">
              <Form.Label className="text-center">
                Использовать промокод
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите промокод"
              ></Form.Control>
              <Button style={{ margin: "10px" }} type="submit">
                Использовать
              </Button>
            </FormGroup>
          </Form>
        </Container>
      );
    }
;

export default Ref;
