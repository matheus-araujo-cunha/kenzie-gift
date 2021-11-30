import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
