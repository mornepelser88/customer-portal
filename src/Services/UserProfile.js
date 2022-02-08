/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    )
  );
}
