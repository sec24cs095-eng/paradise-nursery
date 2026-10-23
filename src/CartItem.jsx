import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your shopping cart is empty 🛒</h2>
        <p>Explore our plants and find your favorite!</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Your Shopping Cart</h1>

      {items.map((item) => (
        <div className="cart-row" key={item.id}>
          <img
            src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
            alt={item.name}
          />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>Unit price: ₹{item.price}</p>

            <p>
              Item total: ₹{item.price * item.quantity}
            </p>

            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                className="quantity-btn"
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>
            </div>
          </div>

          <button
            className="delete-btn"
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>

        <h2>Total Cost: ₹{totalCost}</h2>

        <button
          className="checkout-btn"
          onClick={() =>
            alert("Checkout Coming Soon!")
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;