const payingCustomers = [
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

const payingCustomers = customers.filter((customer) => customer.isPayingCustomer);

const sortedCustomers = payingCustomers.sort((a, b) => b.totalAmountSpent - a.totalAmountSpent);

console.log(sortedCustomers);