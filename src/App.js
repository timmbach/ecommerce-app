import React, { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddtoCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async (productId) => {
    const { cart } = await commerce.cart.empty(productId);
    setCart(cart);
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);

  // console.log(cart.line_items.length);

  return (
    <Router>
      <main>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddtoCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCart={handleUpdateCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
