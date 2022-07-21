import React from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";
import { useSelector } from "react-redux";

const Cart = () => {
  const orderData = useSelector((state) => state.order);
  return (
    <>
      <SingleOrder cart={true} />
      <Button>Go to checkout</Button>
    </>
  );
};

export default Cart;
