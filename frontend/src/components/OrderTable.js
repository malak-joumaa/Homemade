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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MapsModal from "./MapsModal";

const OrderTable = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState(new Array(orders.length));
  const userData = useSelector((state) => state.login);
  console.log(userData);

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
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = (event, index) => {
    console.log(event.target.value);
    let data = [...selected];
    data[index] = event.target.value;
    setSelected(data);
  };
  console.log(selected);

  // Update Status
  const updateStatus = async (id, status) => {
    console.log(id, status);
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
      window.location.reload();

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
      console.log(data);
      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Table>
        <Thead>
          <th>Name</th>
          <th>Items</th>
          <th>Hour</th>
          <th>Total</th>
          <th>Status</th>
          <th>Chat</th>
          <th>Location</th>
        </Thead>
        <Tbody>
          {orders?.map((order, index) => (
            <TableRow status={order.status} key={index}>
              <td>Name Name</td>
              <td>
                {order.orders.map((item) => (
                  <>
                    <span>
                      {item.name}-{item.quantity}
                    </span>
                    <br />
                  </>
                ))}
              </td>
              <td>{order.pickup_hours[0]}</td>
              <td>{order.total}</td>
              <td>
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
                  }}
                >
                  Confirm
                </Confirm>
              </td>
              <IconTd>
                <i
                  className="fa-regular fa-comment-dots"
                  onClick={() => {
                    createChat(order);
                  }}
                ></i>
              </IconTd>
              <IconTd>
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
