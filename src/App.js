import React, { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { commerce } from "./lib/commerce";

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
  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);

  // console.log(cart.line_items.length);

  return (
    <main>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddtoCart} /> */}
      <Cart cart={cart} />
    </main>
  );
};

export default App;
