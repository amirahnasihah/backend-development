const customers = [
  {
    name: "Jeff",
    totalAmountSpent: 203,
    isPayingCustomer: true,
  },
  {
    name: "Alex",
    totalAmountSpent: 0,
    isPayingCustomer: false,
  },
  {
    name: "Courtney",
    totalAmountSpent: 400,
    isPayingCustomer: true,
  },
  {
    name: "Bob",
    totalAmountSpent: 300,
    isPayingCustomer: true,
  },
  {
    name: "Stella",
    totalAmountSpent: 230,
    isPayingCustomer: true,
  },
];

const paidCustomer = customers.filter((c) => c.isPayingCustomer === true);

const sortSpentAmount = paidCustomer.sort(
  (a, b) => b.totalAmountSpent - a.totalAmountSpent
);

console.log(sortSpentAmount);
