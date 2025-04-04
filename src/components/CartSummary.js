import React from "react";

function CartSummary({ subtotal, threshold }) {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Subtotal: ₹{subtotal}</p>
      {subtotal < threshold ? (
        <p>Add ₹{threshold - subtotal} more to get a FREE Wireless Mouse!</p>
      ) : (
        <p>You got a free Wireless Mouse!</p>
      )}
    </div>
  );
}

export default CartSummary;
