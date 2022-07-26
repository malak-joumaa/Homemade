import React, { useState, useEffect } from "react";
import { TableRow } from "../styles/Profile.style";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
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
        setOrders(data);
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Items</th>
          <th>Hour</th>
          <th>Total</th>
          <th>Status</th>
          <th>Chat</th>
          <th>Location</th>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <TableRow status={order.status}>
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
                <select>
                  <option selected disabled>
                    {order.status}
                  </option>
                  <option>Pending</option>
                  <option>Ready</option>
                  <option>Delivered</option>
                </select>
                <button>Confirm</button>
              </td>
              <td></td>
              <td></td>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
