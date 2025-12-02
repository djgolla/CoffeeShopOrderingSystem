// OrderDetails.jsx
// shows details for a single order

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import Loading from "../components/Loading";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`/api/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  if (!order) return <Loading />;

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      <h1 className="text-2xl font-semibold">Order #{order.id}</h1>

      <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-neutral-800">
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg font-medium">{order.customer}</p>
            <p className="opacity-75 text-sm">{order.time}</p>
          </div>
          <StatusBadge status={order.status} />
        </div>

        <h2 className="font-semibold mb-3">Items</h2>
        <ul className="space-y-2 mb-6">
          {order.items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-gray-200 dark:border-neutral-800 pb-2"
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${order.total}</span>
        </div>
      </div>
    </div>
  );
}
