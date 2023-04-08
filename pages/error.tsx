import React from "react";
import { Typography } from "@material-ui/core";
const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Typography variant="h1">404</Typography>
      <p>Error: Store not found</p>
    </div>
  );
};

export default ErrorPage;
