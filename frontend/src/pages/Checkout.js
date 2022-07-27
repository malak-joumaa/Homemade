import React, { useState, useEffect } from "react";
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

const Checkout = () => {
  const navigate = useNavigate();
  // const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.login);
  const orderData = useSelector((state) => state.order);
  const [time, setTime] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [cookLocation, setCookLocation] = useState({});

  useEffect(() => {
    {
      {
        orderData.length > 0 && getUser();
      }
    }
  }, []);

  //Location
  const [selectedPosition, setSelectedPosition] = useState([
    user.location.coordinates[0],
    user.location.coordinates[1],
  ]);
  const [locationName, setLocationName] = useState("");

  var OrderIDs = [];
  var total = 0;
  orderData?.forEach((order) => {
    if (order.status == "cart") {
      OrderIDs.push(
        { name: order.dish.name },
        { quantity: order.dish.quantity }
      );
      total += order.total;
    }
  });

  console.log();

  // Get user by cook id
  const getUser = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/auth/get-userId?id=" +
          orderData?.cook._id
      );
      const data = await res.json();
      console.log(data);
      setCookLocation(data.location.coordinates);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleNotification = (type) => {
  //   socket.emit("sendNotification", {
  //     senderName: user.customer_id,
  //     receiverName: orderData[0].cook,
  //     type,
  //   });
  // };
  console.log("data", orderData[0].cook);

  console.log("order", OrderIDs[0].name);

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
          route: [],
          orders: OrderIDs,
        }),
      });
      const data2 = await res.json();
      console.log(data2);
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };
  // Update Order
  const updateOrder = async () => {
    orderData.forEach(async (singleOrder) => {
      console.log(singleOrder);
      const res = await fetch(
        "http://localhost:5000/api/order/update-order/?id=" + singleOrder._id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            status: "pending",
          }),
        }
      );
    });
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Checkout</Title>
      <Orders>
        {orderData.map((order, index) => (
          <>
            {order.status === "cart" && (
              <SingleOrder cart={false} orderData={orderData[index]} />
            )}
          </>
        ))}
      </Orders>
      <Total>Total: {total}$</Total>
      <SubTitle>Location:</SubTitle>
      <div style={{ width: "100%", height: "350px" }}>
        {orderData.length > 0 && cookLocation.length > 0 && (
          <Maps
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
            locationName={locationName}
            setLocationName={setLocationName}
            coord={cookLocation}
          />
        )}
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
          updateOrder();
          SubmitOrder();
          // handleNotification(1);
        }}
      >
        Confirm
      </Button>
    </Container>
  );
};

export default Checkout;
