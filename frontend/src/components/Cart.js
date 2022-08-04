import React, { useState, useEffect } from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalDiv, Overlay, ModalContent } from "../styles/Modal.style";
import { Rating } from "@mui/material";

const Cart = ({ order }) => {
  const navigate = useNavigate();
  var orderData = useSelector((state) => state.order);
  const [rate, setRate] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const [count, setCount] = useState(1);

  useEffect(() => {
    for (let i = 0; i < orderData.length; i++) {
      if (orderData[i].status === "cart") {
        setCount(count + 1);
        console.log("count", count);
      }
    }

    if (order.length >= 1) {
      if (order[0].status === "delivered" && order[0].rated === false) {
        console.log("rated");
        setModal(true);
      }
    }
    if (order.length == 0) {
      setCount(0);
    }
  }, []);

  // Update rating
  const updateIsRated = async (id) => {
    const res = await fetch(
      "http://localhost:5000/api/order/update-sub-order/?id=" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rated: true,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

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
            setCount(0);
            navigate("/checkout");
          }}
        >
          Go to checkout
        </Button>
      )}
      {/* Map over cook array to fire modal*/}
      {modal && (
        <ModalDiv>
          <Overlay />
          <ModalContent>
            <h1>How was your meal?</h1>
            <Rating
              name="half-rating-read"
              precision={0.5}
              value={rate}
              onClick={(e) => {
                setRate(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                updateIsRated(order[0]._id);
                toggleModal();
              }}
            >
              Submit
            </Button>
          </ModalContent>
        </ModalDiv>
      )}
    </>
  );
};

export default Cart;
