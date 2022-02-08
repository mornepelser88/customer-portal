/** @format */

import { React, useEffect, useState } from "react";
import ProductService from "../Services/ProductService";

export default function ListItemComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ProductService.getItems().then((res) => {
      setItems(res.data);
      console.log(items);
    });
  }, []);

  return (
    <>
      <div class="">
        <h2 className="text-center mt-4">Item List</h2>
        <div className="row mt-4">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                {/* <th scope="col">Actions</th> */}
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
                  {/* <td>
                    <button
                      onClick={() => editProduct(item.id)}
                      className="btn btn-primary me-md-3">
                      Add To Order
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
