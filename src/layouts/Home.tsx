import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-hidden home-scroll">
      <div className="flex flex-row-reverse">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header username={"اسم المستخدم"} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
