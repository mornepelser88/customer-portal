/** @format */

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderComponent from "./components/CreateOrderComponent.js";
import ListOrderComponent from "./components/ListOrderComponent.js";
import ListOrderDetailsComponent from "./components/ListOrderDetailsComponent.js";
import CreateItemComponent from "./components/CreateItemComponent.js";
import AddItemsToOrder from "./components/AddItemsToOrdersComponent.js";
import { useAuth0 } from "@auth0/auth0-react";
import WelcomePage from "./pages/WelcomePage";
import ListItemComponent from "./components/ListItemComponent";

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <Router>
          <Header />
          <div class="container">
            <Routes>
              <Route path="/" element={<ListItemComponent />}></Route>
              <Route path="/products" element={<ListItemComponent />}></Route>
              <Route
                path="/createorder"
                element={<CreateOrderComponent />}></Route>
              <Route
                path="/listorders"
                element={<ListOrderComponent />}></Route>
              <Route
                path="/listorderdetails/:id"
                element={<ListOrderDetailsComponent />}></Route>
              <Route
                path="/createitem/:id"
                element={<CreateItemComponent />}></Route>
              <Route
                path="/additemtoorder/:id"
                element={<AddItemsToOrder />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div class="row flex-lg-row-reverse align-items-center g-5 py-0">
        <WelcomePage />
      </div>
    );
  }
}

export default App;
