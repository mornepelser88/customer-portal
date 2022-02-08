/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      type="button"
      class="btn btn-primary btn-lg px-5 me-md-2">
      Back
    </button>
  );
}
