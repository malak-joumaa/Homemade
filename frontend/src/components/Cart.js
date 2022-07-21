import React from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const orderData = useSelector((state) => state.order);
  return (
    <>
      {orderData.map((order, index) => (
        <>
          {orderData[index].status === "cart" ? (
            <SingleOrder cart={true} orderData={orderData[index]} />
          ) : (
            <></>
          )}
        </>
      ))}
      <Button onClick={navigate("checkout")}>Go to checkout</Button>
    </>
  );
};

export default Cart;
