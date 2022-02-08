/** @format */

import { React, useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.js";

export default function ListOrderDetailsComponent() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState({ id: params.id });

  useEffect(() => {
    ProductService.getItemsByOrderId(orders.id).then((res) => {
      setItems(res.data);
      console.log(items);
    });
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center mt-4">Order # {orders.id}</h2>
        <div className="row mt-4">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.sku}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="text-end">
          <BackButton />
        </div>
      </div>
    </>
  );
}
