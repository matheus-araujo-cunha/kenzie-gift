import { Container } from "./styles";

import Button from "@material-ui/core/Button";

// import { useDispatch } from "react-redux";

// import { removeCart } from "../../store/modules/cart/actions";

import { useContext } from "react";

import { CartContext } from "../../providers/cart";

const CardCart = ({ product, index }) => {
  const { name, price, image, id } = product;

  const { removeFromCart } = useContext(CartContext);

  console.log(product);

  const handleRemoveCart = () => {
    removeFromCart(id, index);
  };

  return (
    <Container>
      <img src={image} alt={name} />

      <div>{name}</div>
      <section>
        <span>{price} R$</span>
        <Button
          onClick={() => handleRemoveCart()}
          variant="contained"
          size="small"
        >
          Remover Produto
        </Button>
      </section>
    </Container>
  );
};

export default CardCart;
