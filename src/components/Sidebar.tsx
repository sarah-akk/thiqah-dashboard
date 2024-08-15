import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside
      className="w-1/6 bg-blue-950 z-9999 flex  flex-col items-center max-h-full 
      overflow-auto duration-300 ease-linear rounded m-2 custom-gradient"
      style={{ direction: "rtl" }}
    >
      <img src={logo} className="w-30 m-5" alt="Logo" />

      <nav className="flex flex-col w-full mt-5 items-center gap-4 text-white font-bold text-xl">
        <Link
          to="/home/dashboard"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("dashboard") && "bg-blue-300"
          }`}
        >
          الرئيسية
        </Link>
        <Link
          to="/home/students"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("students") && "bg-blue-200"
          }`}
        >
          الطلاب
        </Link>
        <Link
          to="/home/offers"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("offers") && "bg-blue-300"
          }`}
        >
          العروض
        </Link>
        <Link
          to="/home/sections"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("sections") && "bg-blue-300"
          }`}
        >
          الاقسام
        </Link>

        <Link
          to="/home/outstanding"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("outstanding") && "bg-blue-300"
          }`}
        >
          الاوائل
        </Link>
        <Link
          to="/home/info"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("info") && "bg-blue-300"
          } `}
        >
          معلومات عنا
        </Link>
        <Link
          to="/home/contact"
          className={`sidebar-item py-2 px-4 rounded transition-colors duration-200 hover:bg-blue-200 ${
            pathname.includes("contact") && "bg-blue-300"
          }`}
        >
          تواصل معنا
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
