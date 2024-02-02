import { AppContext } from "@/app/context/userContext";
import { MoneyOff } from "@mui/icons-material";
import React, { useContext } from "react";

const Actions = () => {
  const { deposit } = useContext(AppContext);
  return (
    <div className="text-white flex justify-between items-center mt-6 mb-4">
      <div className="acts" onClick={deposit}>
        <MoneyOff />
        <p>Deposit</p>
      </div>
      <div className="acts">
        <MoneyOff />
        <p>Withdraw</p>
      </div>
    </div>
  );
};

export default Actions;
