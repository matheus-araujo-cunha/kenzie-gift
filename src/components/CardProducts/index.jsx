import { Container, Content } from "./styles";

import { useEffect, useState } from "react";

import { useContext } from "react";

import { CartContext } from "../../providers/cart";

import CardCart from "../CardCart";

const CartProducts = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <Container>
          <header>
            <h3>Produto</h3>
            <h4>Preço</h4>
          </header>
          <Content>
            {cart.map((product, index) => (
              <CardCart product={product} index={index} key={index}></CardCart>
            ))}
          </Content>
        </Container>
      ) : (
        <Container>
          <div>
            <h2>Não há nenhum produto em seu carrinho...</h2>
            <h3>Que tal ir as compras?</h3>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartProducts;
