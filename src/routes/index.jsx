import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default Routes;
