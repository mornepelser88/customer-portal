/** @format */

import axios from "axios";

const PRODUCTS_API_BASE_URL1 = "http://localhost:8080/api";

class ProductService {
  getItems() {
    return axios.get(PRODUCTS_API_BASE_URL1 + "/items");
  }

  createItem(orderId, item) {
    return axios.post(
      PRODUCTS_API_BASE_URL1 + "/orders/" + orderId + "/items",
      item
    );
  }

  createOrder(orders) {
    return axios.post(PRODUCTS_API_BASE_URL1 + "/orders", orders);
  }

  getOrders() {
    return axios.get(PRODUCTS_API_BASE_URL1 + "/orders");
  }

  getItemsByOrderId(productId) {
    return axios.get(
      PRODUCTS_API_BASE_URL1 + "/orders/" + productId + "/items"
    );
  }

  delelteProductFromOrder(orderId) {
    return axios.delete(
      PRODUCTS_API_BASE_URL1 + "/orders/" + orderId + "/items"
    );
  }

  deleteOrder(orderId) {
    return axios.delete(PRODUCTS_API_BASE_URL1 + "/orders/" + orderId);
  }
}

export default new ProductService();
