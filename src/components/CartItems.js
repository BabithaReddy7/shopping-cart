import React from "react";

function CartItems({ cart, updateQuantity }) {
  return (
    <div className="cart-items">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name} ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
            </p>
            {item.price > 0 && (
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default CartItems;
