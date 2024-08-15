import React from "react";
import bg from "../assets/gb.png";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <>
      <img src={bg} className="absolute right-60" />
      <header className="bg-white text-gray-900 flex items-center justify-between p-4 shadow-md absolute w-5/6">
        <div className="flex items-center space-x-5">
          {/* Notifications */}
          <IconButton className="text-gray-600 hover:text-gray-900">
            <NotificationsIcon />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </IconButton>

          {/* Settings */}
          <IconButton className="text-gray-600 hover:text-gray-900">
            <SettingsIcon />
          </IconButton>

          {/* User Avatar and Name */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <span className="text-sm font-semibold">{username}</span>
          </div>
        </div>
      </header>{" "}
    </>
  );
};

export default Header;
