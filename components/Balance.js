import { AppContext } from "@/app/context/userContext";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";

const Balance = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="flex flex-col h-full w-full">
      <Paper
        elevation={0.3}
        sx={{ padding: "20px" }}
        className=" bg-gradient-to-br from-pink-400 to-pink-700 flex-1"
      >
        <h5 className="mb-1 text-[18px] text-gray-700">Your Pi Balance</h5>
        <h3 className="text-[20px]">{user?.balance} $PI</h3>
        <div className="flex mt-3 justify-between items-center">
          <h3>@{user?.username}</h3>
          <p>23/11/2024</p>
        </div>
      </Paper>
    </div>
  );
};

export default Balance;
