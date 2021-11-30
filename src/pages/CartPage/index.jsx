import { Container } from "./styles";

import SectionPrice from "../../components/SectionPrice";

import CartProducts from "../../components/CardProducts";

const CartPage = () => {
  return (
    <Container>
      <CartProducts />
      <SectionPrice />
    </Container>
  );
};

export default CartPage;
