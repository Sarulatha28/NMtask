import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* Common layout parts here (nav, footer, etc) */}
      <Outlet /> {/* This renders the nested route (Task, Saree, etc) */}
    </div>
  );
};

export default RootLayout;
