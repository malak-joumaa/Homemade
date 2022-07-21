import React from "react";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";

const Ordered = () => {
  const orderData = useSelector((state) => state.order);

  return (
    <>
      {orderData.map((order, index) => (
        <>
          {orderData[index].status === "pending" ? (
            <SingleOrder cart={false} orderData={orderData[index]} />
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default Ordered;
