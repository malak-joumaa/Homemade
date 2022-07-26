import React, { useState } from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  var orderData = useSelector((state) => state.order);
  var count = 0;
  for (let i = 0; i < orderData.length; i++) {
    if (orderData[i].status === "cart") {
      count++;
    }
  }
  return (
    <>
      {orderData.length > 0 ? (
        orderData.map((order, index) => (
          <>
            {orderData[index].status === "cart" ? (
              <>
                <SingleOrder cart={true} orderData={orderData[index]} />
              </>
            ) : (
              <></>
            )}
          </>
        ))
      ) : (
        <></>
      )}
      {count > 0 && (
        <Button
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Go to checkout
        </Button>
      )}
    </>
  );
};

export default Cart;
