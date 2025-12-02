// seed.js
// mock database for the fake backend

export default {
  orders: [
    {
      id: 101,
      customer: "Professor Lei",
      time: "8:32 AM",
      status: "pending",
      total: 12.50,
      items: [
        { name: "Iced Latte", price: 5.00 },
        { name: "Blueberry Muffin", price: 3.50 },
        { name: "Extra Shot", price: 4.00 },
      ],
    },
    {
      id: 102,
      customer: "Daniel Golladay",
      time: "9:10 AM",
      status: "preparing",
      total: 7.00,
      items: [
        { name: "Cappuccino", price: 4.00 },
        { name: "Chocolate Chip Cookie", price: 3.00 },
      ],
    },
    {
      id: 103,
      customer: "Billy Bob",
      time: "9:42 AM",
      status: "ready",
      total: 4.50,
      items: [{ name: "Hot Coffee", price: 4.50 }],
    },
    {
      id: 104,
      customer: "Joe",
      time: "10:15 AM",
      status: "completed",
      total: 9.75,
      items: [
        { name: "Vanilla Latte", price: 5.75 },
        { name: "Banana Bread", price: 4.00 },
      ],
    },
  ],

  menu: [
    { id: 1, name: "Hot Coffee", category: "Drinks", price: 4.50 },
    { id: 2, name: "Iced Latte", category: "Drinks", price: 5.00 },
    { id: 3, name: "Cold Brew", category: "Drinks", price: 5.25 },
    { id: 4, name: "Vanilla Latte", category: "Drinks", price: 5.75 },
    { id: 5, name: "Cappuccino", category: "Drinks", price: 4.00 },
    { id: 6, name: "Mocha", category: "Drinks", price: 5.50 },

    { id: 7, name: "Blueberry Muffin", category: "Bakery", price: 3.50 },
    { id: 8, name: "Chocolate Croissant", category: "Bakery", price: 4.00 },
    { id: 9, name: "Banana Bread", category: "Bakery", price: 4.00 },
  ],

  account: [
    {
      id: 1,
      name: "Manager Account",
      email: "manager@coffeeshop.com",
    },
  ],

  stats: [
    {
      totalOrders: 47,
      revenueToday: 312.40,
      activeCustomers: 21,
      recentOrders: [
        { id: 104, time: "10:15 AM" },
        { id: 103, time: "9:42 AM" },
        { id: 102, time: "9:10 AM" },
        { id: 101, time: "8:32 AM" },
      ],
    },
  ],
};
