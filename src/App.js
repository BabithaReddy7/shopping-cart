import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import CartItems from "./components/CartItems";
import "./styles.css";

// Product and Free Gift Constants
const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([]);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to update quantity
  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isGiftEligible = subtotal >= THRESHOLD;
  const hasGift = cart.some((item) => item.id === FREE_GIFT.id);

  useEffect(() => {
    if (isGiftEligible && !hasGift) {
      setCart((prevCart) => [...prevCart, { ...FREE_GIFT, quantity: 1 }]);
    } else if (!isGiftEligible && hasGift) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== FREE_GIFT.id));
    }
  }, [subtotal, hasGift]);

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <CartSummary subtotal={subtotal} threshold={THRESHOLD} />
      <CartItems cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
