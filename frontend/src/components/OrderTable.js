import React, { useState, useEffect } from "react";
import {
  TableRow,
  Table,
  IconTd,
  Select,
  Confirm,
  Tbody,
  Thead,
} from "../styles/Profile.style";
import { Answer } from "../styles/Orders.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MapsModal from "./maps/MapsModal";
import toast from "react-hot-toast";
import { getMessaging } from "firebase/messaging";

const OrderTable = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState(new Array(orders.length));
  const userData = useSelector((state) => state.login);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);
  // Get Orders
  const getOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/get-sub-orders/?id=" +
          localStorage.getItem("cook_id")
      ).then(async (res) => {
        const data = await res.json();
        setOrders(data.reverse());
      });
    } catch (err) {
      toast.error("Error fetching orders data");
    }
  };

  const handleSelect = (event, index) => {
    let data = [...selected];
    data[index] = event.target.value;
    setSelected(data);
  };

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/update-sub-order/?id=" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: status,
          }),
        }
      );
      // window.location.reload();

      const data = await res.json();
    } catch (err) {
      toast.error("Error updating order status");
    }
  };

  // Update Order
  const updateOrder = async (status, ids) => {
    var i = 0;
    ids.forEach(async (singleOrder) => {
      const res = await fetch(
        "http://localhost:5000/api/order/update-order/?id=" + singleOrder.id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            status: status,
          }),
        }
      );
      i++;
    });
  };

  // Create Chat
  const createChat = async (order) => {
    try {
      const res = await fetch("http://localhost:5000/api/chat/add-convo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          members: [userData.user_id, order.customer.user],
        }),
      });
      const data = await res.json();
      navigate("/chat");
    } catch (err) {}
  };
  useEffect(() => {
    const getConversations = async () => {
      const response = await fetch(
        "http://localhost:5000/api/chat/get-convo/?id=" + userData.user_id
      );
      const data = await response.json();
      setConversations(data);
    };
    getConversations();
  }, []);

  var created = false;
  const handleChat = (order) => {
    for (var i = 0; i < conversations.length; i++) {
      if (conversations[i].members.includes(order.customer.user)) {
        created = true;
        navigate("/chat");
      }
    }
    if (created == false) {
      createChat(order);
    }
  };
  console.log(orders);

  return (
    <div>
      <Table>
        {/* Head */}
        <Thead className="table-section">
          <th>Name</th>
          <th>Items</th>
          <th>Order Time</th>
          <th>Total</th>
          <th>Status</th>
          <th>Chat</th>
          <th>Location</th>
        </Thead>
        {/* Body */}
        <Tbody>
          {orders?.map((order, index) => (
            <TableRow
              status={order.status}
              key={index}
              className="table-section"
            >
              <td>
                {order?.customer?.user?.first_name}{" "}
                {order?.customer?.user?.last_name}
              </td>
              <td>
                {order.orders.map((item) => (
                  <>
                    <span>
                      {item.name} {item.quantity}{" "}
                      <Answer>{item.answers}</Answer>
                    </span>
                    <br />
                  </>
                ))}
              </td>
              <td>{order.pickup_hours[0]}</td>
              <td>{order.total}</td>
              <td>
                {/* Change Status */}
                <Select
                  value={selected[index]}
                  onChange={(event) => {
                    handleSelect(event, index);
                  }}
                >
                  <option selected disabled>
                    {order.status}
                  </option>
                  <option value="pending">Pending</option>
                  <option value="ready">Ready</option>
                  <option value="delivered">Delivered</option>
                </Select>
                <Confirm
                  onClick={() => {
                    updateStatus(order._id, selected[index]);
                    updateOrder(
                      selected[index],
                      order.orders.filter((item) => item.id !== undefined)
                    );
                    // if (selected[index] === "ready") {
                    //   // Sending Notification to Customer
                    //   const message = {
                    //     token: order.customer.user,
                    //     notification: {
                    //       title: "order",
                    //       body: "Your order is ready!",
                    //     },
                    //     data: {
                    //       title: "order",
                    //       body: "Your order is ready!",
                    //     },
                    //   };
                    //   getMessaging()
                    //     .send(message)
                    //     .then((response) => {
                    //       // Response is a message ID string.
                    //       console.log("Successfully sent message:", response);
                    //     })
                    //     .catch((error) => {
                    //       console.log("Error sending message:", error);
                    //     });
                    // }
                    window.location.reload();
                  }}
                >
                  Confirm
                </Confirm>
              </td>
              {/* Chat */}
              <IconTd>
                <i
                  className="fa-regular fa-comment-dots"
                  onClick={() => {
                    handleChat(order);
                  }}
                ></i>
              </IconTd>
              <IconTd>
                {/* Location */}
                <MapsModal route={order.route} />
              </IconTd>
            </TableRow>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default OrderTable;
