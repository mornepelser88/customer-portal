/** @format */

import React from "react";
import moyoImage from "../Assets/Moyo2.jpg";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function WelcomePage() {
  const { isAuthenticated } = useAuth0();
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src={moyoImage}
          class="d-block mx-lg-auto img-fluid"
          alt="Moyo Image"
          width="400"
          // height="400"
        ></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-3 fw-bold lh-1 mb-3">Moyo Case Study</h1>
        <h4 class="lead-font-weight:300">This is a system that allows:</h4>
        <ul>
          <li>a client to login</li>
          <li>browsing of Products (basic: 1 table)</li>
          <li>browsing & viewing orders</li>
          <li>Adding of new Orders</li>
        </ul>
        <h4 class="lead-font-weight:300">This is a system that allows:</h4>
        <ul>
          <li>Angular / React Front End </li>
          <li>OAuth 2.0/OpenID Connect</li>
          <li>Java (JEE/Spring Boot) </li>
          <li>Hibernate / JPA / Spring Data </li>
          <li>
            Asynchronous Communication to Order Management Platform (new Orders)
          </li>
          <li>
            Asynchronous Communication from Order Management Platform (Status
            updates)
          </li>
          <li>Synchronous Communication with Product System</li>
          <li>Cloud based PaaS</li>
        </ul>

        <div class="d-grid gap-2 d-lg-flex justify-content-md-start">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
