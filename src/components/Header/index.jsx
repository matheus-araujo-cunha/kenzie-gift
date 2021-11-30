import { Container } from "./styles";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Badge from "@material-ui/core/Badge";

import { useContext } from "react";

import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";

import { useHistory } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(CartContext);

  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push("/")}>Kenzie Gift</h1>
      <div>
        <h3 onClick={() => history.push("/cart")}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          Carrinho
        </h3>
        <h3>
          <ExitToAppIcon />
          Entrar
        </h3>
      </div>
    </Container>
  );
};

export default Header;
