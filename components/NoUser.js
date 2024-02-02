"use client";
import { AppContext } from "@/app/context/userContext";
import React, { useContext, useEffect, useState } from "react";

const NoUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginUser, user, autoLogin } = useContext(AppContext);

  const handleLogin = () => {
    loginUser();
    setIsLoggedIn(true);
  };

  if (user) {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="text-white flex justify-center items-center bg-red-400 h-[100vh]">
      <button
        onClick={handleLogin}
        className="bg-gray-400 py-2 px-4 rounded-md"
      >
        {!isLoggedIn ? "Sign In" : "Signing You In..."}
      </button>
    </div>
  );
};

export default NoUser;
