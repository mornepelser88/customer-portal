/** @format */

import { React, useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ListOrdersComponent() {
  const { isAuthenticated } = useAuth0();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ProductService.getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  const navigate = useNavigate();

  function viewOrderDetails(id) {
    navigate(`/listorderdetails/${id}`);
  }

  function goToAddItemsPage(id) {
    navigate(`/createitem/${id}`);
  }

  function deleteOrders(id) {
    ProductService.deleteOrder(id).then((res) => {
      ProductService.getOrders().then((res) => {
        setOrders(res.data);
      });
    });
  }

  return (
    <>
      <div>
        <h2 className="text-center mt-4">All Orders</h2>
        <div className="row mt-4">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Order Number</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Order Description</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.orderNumber}</td>
                  <td>{order.customerName}</td>
                  <td>{order.orderDescription}</td>
                  <td class="text-center">
                    <button
                      onClick={() => goToAddItemsPage(order.id)}
                      className="btn btn-primary me-md-3">
                      Add Items
                    </button>
                    <button
                      onClick={() => viewOrderDetails(order.id)}
                      className="btn btn-secondary me-md-3">
                      View Details
                    </button>
                    <button
                      onClick={() => deleteOrders(order.id)}
                      className="btn btn-danger">
                      Delete Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
