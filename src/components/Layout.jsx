import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>MYTHERESA Frontend UI Challenge</h1>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
