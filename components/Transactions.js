import Link from "next/link";
import React, { useContext } from "react";
import TransactionCard from "./TransactionCard";
import { AppContext } from "@/app/context/userContext";
import { CircularProgress } from "@mui/material";

const Transactions = () => {
  const { transactions } = useContext(AppContext);
  return (
    <div className="text-white">
      <div className="flex justify-between items-center">
        <p>Transactions</p>
        <Link href="/">Transactions</Link>
      </div>
      {transactions.length > 0 ? (
        transactions
          ?.reverse()
          .map((transaction) => (
            <TransactionCard key={transaction._id} transaction={transaction} />
          ))
      ) : (
        <div>no</div>
      )}
    </div>
  );
};

export default Transactions;
