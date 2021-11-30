import { Container } from "./styles";

import Button from "@material-ui/core/Button";

// import { addCart } from "../../store/modules/cart/actions";

import { useContext } from "react";

import { CartContext } from "../../providers/cart";

const Card = ({ product }) => {
  const { name, price, image } = product;

  const { addToCart } = useContext(CartContext);

  //   console.log(addToCart);
  //   const dispatch = useDispatch();

  const handleAddCart = () => {
    addToCart(product);
  };

  return (
    <Container>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>{price}R$</span>
      <Button onClick={() => handleAddCart()} variant="contained" size="small">
        Adicionar ao carrinho
      </Button>
    </Container>
  );
};

export default Card;
