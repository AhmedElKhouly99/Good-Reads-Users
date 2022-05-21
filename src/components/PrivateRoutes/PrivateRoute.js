import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  console.log(sessionStorage.getItem("token"));
  return sessionStorage.getItem("token") !== "undefined" ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
}
