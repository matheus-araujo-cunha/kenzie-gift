import { Container } from "./styles";

import { useHistory } from "react-router-dom";

import toast from "react-hot-toast";

import { CartContext } from "../../providers/cart";

import { useContext } from "react";

import Button from "@material-ui/core/Button";

const SectionPrice = () => {
  const { cart } = useContext(CartContext);

  const totalProducts = cart.length;

  const totalPrice = cart.reduce(
    (acc, { price }) => Number((acc + price).toFixed(2)),
    0
  );

  return (
    <Container>
      <h2>Resumo do pedido</h2>
      <section>
        <p>{totalProducts} produtos</p> <span>R$ {totalPrice} </span>
      </section>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => toast.success("Compra finalizada!")}
      >
        Finalizar pedido
      </Button>
    </Container>
  );
};

export default SectionPrice;
