/** @format */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithPopup, loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      type="button"
      class="btn btn-primary btn-lg px-4 me-md-2">
      Log In
    </button>
  );
}
