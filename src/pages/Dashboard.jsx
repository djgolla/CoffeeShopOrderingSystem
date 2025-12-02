// Dashboard.jsx
// main dashboard screen — uses cards + metrics

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <Loading />;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* row of metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Orders">
          <p className="text-3xl font-semibold">{stats.totalOrders}</p>
        </Card>

        <Card title="Revenue Today">
          <p className="text-3xl font-semibold">${stats.revenueToday}</p>
        </Card>

        <Card title="Active Customers">
          <p className="text-3xl font-semibold">{stats.activeCustomers}</p>
        </Card>
      </div>

      {/* latest orders */}
      <Card title="Recent Orders">
        <div className="space-y-2">
          {stats.recentOrders.map((o) => (
            <div
              key={o.id}
              className="flex justify-between border-b border-gray-200 dark:border-neutral-800 pb-2"
            >
              <span>Order #{o.id}</span>
              <span className="opacity-75">{o.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
