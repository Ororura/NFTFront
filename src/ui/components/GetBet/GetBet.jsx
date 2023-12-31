import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "../HOC/Container";
import { Context } from "../../../core/Context";

const GetBet = () => {
  const { getBet, betState } = useContext(Context);

  const handerGetBet = async (id, e) => {
    e.preventDefault();
    getBet();
  };

  return (
    <Container>
      <Button
        onClick={(e) => {
          handerGetBet(0, e);
        }}
      >
        Узнать ставки
      </Button>
      {betState.map((el) => (
        <>
          <p className="text-center">{el.owner}</p>
          <p className="text-center">{el.amount / 10 ** 6} PROFI</p>
        </>
      ))}
    </Container>
  );
};

export default GetBet;
