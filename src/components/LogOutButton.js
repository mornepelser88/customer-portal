/** @format */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogOutButton() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout()}
      type="button"
      class="btn btn-outline-primary btn-lg px-4 ">
      Log Out
    </button>
  );
}
