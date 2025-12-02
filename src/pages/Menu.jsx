// Menu.jsx
// menu items for the coffee shop

import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Menu() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  if (!menu) return <Loading />;

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      <h1 className="text-2xl font-semibold">Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-neutral-900 p-5 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-soft"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="opacity-75">{item.category}</p>
            <p className="mt-2 font-medium">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
