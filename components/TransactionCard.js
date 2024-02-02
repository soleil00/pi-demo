import { formatTransactionTime } from "@/lib/dateFormater";
import { Avatar, CircularProgress } from "@mui/material";
import React from "react";

const TransactionCard = ({ transaction }) => {
  const formatedTime = formatTransactionTime(transaction.created_at);

  return (
    <div
      className={`text-white my-2 flex justify-between items-center p-2 rounded-md border ${
        transaction.paid ? "border-green-400" : "border-red-400"
      }`}
    >
      <div className="flex gap-[10px] items-center">
        <Avatar className="w-[50px] h-[50px]">
          <img src="./" className="w-[60px] h-[60px]" />
        </Avatar>
        <div>
          <h2>{transaction.product_id}</h2>
          <p>{formatedTime}</p>
        </div>
      </div>
      <div>{transaction.amount} PI</div>
    </div>
  );
};

export default TransactionCard;
