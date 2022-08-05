import React, { useState, useEffect } from "react";
import SingleOrder from "../components/SingleOrder";
import { Button } from "../styles/Orders.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalDiv, Overlay, ModalContent } from "../styles/Modal.style";
import { Rating } from "@mui/material";
import toast from "react-hot-toast";

const Cart = ({ order }) => {
  const navigate = useNavigate();
  var orderData = useSelector((state) => state.order);
  const [rate, setRate] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const [count, setCount] = useState(false);

  useEffect(() => {
    for (let i = 0; i < orderData.length; i++) {
      if (orderData[i].status === "cart") {
        setCount(true);
      }
    }

    if (order.length >= 1) {
      if (
        order[order.length - 1].status === "delivered" &&
        order[order.length - 1].rated === false
      ) {
        setModal(true);
      }
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
  };

  // Update cook rate
  const updateRate = async (id, rate, rate_count) => {
    let total_rate = rate / rate_count + 1 + rate / rate_count + 1;
    let total_rate_count = rate_count + 1;
    const res = await fetch(
      "http://localhost:5000/api/user/update-cook/?id=" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rate: total_rate,
          rate_count: total_rate_count,
        }),
      }
    );
    const data = await res.json();
  };

  return (
    <>
      {orderData.length > 0 &&
        orderData.map((order, index) => (
          <>
            {order.status === "cart" && (
              <SingleOrder cart={true} orderData={order} />
            )}
          </>
        ))}

      {/* Checkout button */}
      <Button
        onClick={() => {
          if (count == 1) {
            setCount(0);
            navigate("/checkout");
          } else {
            toast.error("You must have at least one order");
          }
        }}
      >
        Go to checkout
      </Button>
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
                console.log(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                updateIsRated(order[order.length - 1]._id);
                toggleModal();
                updateRate(
                  order[0].cook._id,
                  order[0].cook.rate,
                  order[0].cook.rate_count
                );
                window.location.reload();
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
