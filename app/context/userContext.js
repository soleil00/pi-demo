"use client";

import { axiosClient } from "@/config/backendConfiguration";
import {
  autoLoginUser,
  signInUser,
  signOutUser,
  userInitiateDeposit,
} from "@/lib/functions";
import { getUserTransactions } from "@/lib/transactions";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const loginUser = async () => {
    try {
      const { currentUser, token } = await signInUser();
      setUser(currentUser);
      localStorage.setItem("accessToken", token);
      console.log("Token in React component:", token);

      // Fetch transactions after successful login
      getTransaction();
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };

  const autoLogin = async () => {
    try {
      const { currentUser, token } = await autoLoginUser();
      setUser(currentUser);
      localStorage.setItem("accessToken", token);
      // Fetch transactions after successful auto-login
      getTransaction();
    } catch (error) {
      console.log("Token expires or auto-login fails");
    }
  };

  const logoutUser = () => {
    signOutUser();
    setUser(null);
  };

  const deposit = async () => {
    const res = await userInitiateDeposit("Deposit", 3, {
      productId: "Deposting",
    });
    console.log(res);
  };

  const getTransaction = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) return;

    try {
      const res = await axiosClient.post(
        "/transactions",
        {}, // Empty payload as the second argument
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (res) {
        const { transactions } = res.data;
        console.log("These are transactions:", transactions);
        setTransactions(transactions);
      } else {
        console.error(
          "Error fetching transactions: Response is null or undefined"
        );
      }
    } catch (error) {
      console.error("Error in getTransaction:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loginUser,
        user,
        deposit,
        logoutUser,
        setUser,
        autoLogin,
        transactions,
        getTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default UserContextProvider;
