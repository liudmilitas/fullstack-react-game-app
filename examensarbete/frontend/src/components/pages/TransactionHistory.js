import React, { useEffect } from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listMyTransactions } from "../../actions/transactionActions";

export default function TransactionHistory() {
  const dispatch = useDispatch();
  const transactionListMy = useSelector((state) => state.transactionListMy);
  const { error, loading, transactions } = transactionListMy;

  useEffect(() => {
    dispatch(listMyTransactions());
  }, [dispatch]);

  function TransactionTable() {
    return (
      <section className="h-fit py-4 w-full flex justify-center items-center">
        {transactions?.length > 0 ? (
          <table className="shadow-lg bg-white border-collapse h-fit py-4">
            <thead>
              <tr>
                <th className="bg-indigo-100 border text-left px-8 py-4">#</th>
                <th className="bg-indigo-100 border text-left px-8 py-4">
                  Coins
                </th>
                <th className="bg-indigo-100 border text-left px-8 py-4">
                  Amount
                </th>
                <th className="bg-indigo-100 border text-left px-8 py-4">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction) => (
                <tr key={transactions.indexOf(transaction)}>
                  <td className="border px-8 py-4">
                    #{transactions.indexOf(transaction) + 1}
                  </td>
                  <td className="border px-8 py-4">
                    {transaction.coins_amount}
                  </td>
                  <td className="border px-8 py-4">{transaction.amount}</td>
                  <td className="border px-8 py-4">
                    {transaction.transaction_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-2xl">
            Your transaction history will appear here
          </h2>
        )}
      </section>
    );
  }
  return (
    <>
      <Header />
      <TransactionTable />
      <Footer />
    </>
  );
}
