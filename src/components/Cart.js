import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.sethowCart());
  };
  const quantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
