// Orders.jsx
// list of all orders — fetches /api/orders

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import Loading from "../components/Loading";

export default function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (!orders) return <Loading />;

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      <h1 className="text-2xl font-semibold">Orders</h1>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-neutral-800">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Total</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
              >
                <td className="py-2">
                  <Link
                    to={`/orders/${o.id}`}
                    className="text-coffee hover:underline"
                  >
                    #{o.id}
                  </Link>
                </td>
                <td>{o.customer}</td>
                <td>${o.total}</td>
                <td>
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
