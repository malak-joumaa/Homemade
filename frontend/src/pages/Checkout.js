import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import {
  Title,
  Orders,
  Total,
  SubTitle,
  Button,
} from "../styles/Checkout.styles";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";
import Maps from "../components/maps/Maps";
import { requestForToken } from "../firebaseNotifications/firebase";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.login);
  const orderData = useSelector((state) => state.order);
  const [time, setTime] = useState("");
  const [isValid, setIsValid] = useState(false);

  //Notification
  const Notification = () => {
    requestForToken();
  };
  Notification();

  //Location
  const [selectedPosition, setSelectedPosition] = useState(
    user.location.coordinates
  );
  const [locationName, setLocationName] = useState("");

  var OrderIDs = [];
  var total = 0;
  orderData?.forEach((order) => {
    if (order.status == "cart") {
      OrderIDs.push(
        { name: order.dish.name },
        { quantity: order.quantity },
        { id: order._id },
        { answers: order.answers }
      );
      total += order.total;
    }
  });

  // Add Submitted Order
  const SubmitOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/order/add-sub-order", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          total: total,
          cook: localStorage.getItem("cook_id"),
          customer: localStorage.getItem("customer_id"),
          status: "pending",
          pickup_hours: [time],
          route: [
            selectedPosition,
            orderData[0].cook.user.location.coordinates,
          ],
          orders: OrderIDs,
          rated: false,
        }),
      });
      navigate("/orders");
    } catch (error) {
      toast.error("Could not add order");
    }
  };

  // Update Order
  const updateOrder = async () => {
    orderData.forEach(async (singleOrder) => {
      const res = await fetch(
        "http://localhost:5000/api/order/update-order/?id=" + singleOrder._id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            status: "pending",
            route: [
              selectedPosition,
              orderData[0].cook.user.location.coordinates,
            ],
          }),
        }
      );
    });
  };

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Checkout</Title>
      {/* Displaying Orders */}
      <Orders>
        {orderData.map((order, index) => (
          <div key={index}>
            {order.status === "cart" && (
              <SingleOrder cart={false} orderData={orderData[index]} />
            )}
          </div>
        ))}
      </Orders>

      <Total>Total: {total}$</Total>

      {/* Map */}
      <SubTitle>Location:</SubTitle>
      <div style={{ width: "100%", height: "350px" }}>
        <Maps
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          locationName={locationName}
          setLocationName={setLocationName}
          coord={orderData[0].cook.user.location.coordinates}
        />
      </div>

      <SubTitle>Pickup Hour:</SubTitle>
      <input
        type="time"
        className="oph"
        name="oph"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
        id={!isValid ? "" : "oph-validity"}
        onClick={(e) => {
          setIsValid(true);
        }}
        style={{ marginLeft: "0px" }}
      />
      <br />

      <Button
        onClick={() => {
          if (time === "") {
            toast.error("Please select a pickup hour");
          } else {
            updateOrder();
            SubmitOrder();
          }
        }}
      >
        Confirm
      </Button>
    </Container>
  );
};

export default Checkout;
