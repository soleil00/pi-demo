import { AppContext } from "@/app/context/userContext";
import { Message, Person } from "@mui/icons-material";
import React, { useContext } from "react";

const Header = () => {
  const { logoutUser, user } = useContext(AppContext);
  return (
    <div className="flex justify-between items-center text-white mb-2 px-3 py2">
      <div className="flex items-center gap-[10px]">
        <Person />
        <div>
          <h3>@{user.username}</h3>
          <p className="text-gray-400">32434 34342 24</p>
        </div>
      </div>
      <button onClick={logoutUser} className="head-btn">
        logout
      </button>
    </div>
  );
};

export default Header;
