import React from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";

const Cart = () => {
  return (
    <>
      <SingleOrder cart={true} />
      <Button>Go to checkout</Button>
    </>
  );
};

export default Cart;
