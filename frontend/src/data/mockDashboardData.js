export const mockDashboardData = {
  balance: 2450,
  income: 1200,
  expenses: 850,
  expenseDistribution: [
    { name: "Maistas", value: 45, color: "#49e36a" },
    { name: "Būstas", value: 30, color: "#f59a3d" },
    { name: "Transportas", value: 15, color: "#3b82f6" },
    { name: "Kita", value: 10, color: "#7c8aa5" },
  ],
  budgetCategories: [
    {
      id: 1,
      name: "Maistas",
      spent: 340,
      limit: 500,
      progress: 68,
      accent: "green",
    },
    {
      id: 2,
      name: "Būstas",
      spent: 850,
      limit: 900,
      progress: 94,
      accent: "orange",
    },
  ],
  recentTransactions: [
    {
      id: 1,
      title: "Maxima XXX",
      date: "Šiandien, 14:20",
      amount: -34.2,
      type: "expense",
    },
    {
      id: 2,
      title: "Atlyginimas",
      date: "Vakar, 09:00",
      amount: 1200,
      type: "income",
    },
    {
      id: 3,
      title: "Circle K",
      date: "Gruodžio 12, 18:45",
      amount: -50,
      type: "expense",
    },
  ],
};