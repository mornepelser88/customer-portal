/** @format */

import React from "react";
import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  return (
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/products" class="nav-link px-2 text-white">
                All Products
              </a>
            </li>
            {/* <li>
              <a href="/welcome" class="nav-link px-2 text-white">
                Welcome
              </a>
            </li> */}
            <li>
              <a href="/createorder" class="nav-link px-2 text-white">
                Create Order
              </a>
            </li>
            <li>
              <a href="/listorders" class="nav-link px-2 text-white">
                View Orders
              </a>
            </li>
          </ul>

          <div class="text-end ">
            <LogOutButton />
          </div>
        </div>
      </div>
    </header>
  );
}
