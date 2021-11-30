import { useContext } from "react";

import { Container, Content } from "./styles";

import { ProductsContext } from "../../providers/products";

import Card from "../Card";

const ListProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <Content>
        {products.map((product, index) => (
          <Card product={product} key={index}></Card>
        ))}
      </Content>
    </Container>
  );
};

export default ListProducts;
