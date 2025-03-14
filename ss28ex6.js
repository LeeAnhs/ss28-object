const cart = [
  { name: "Mèn mén", price: 30000, quantity: 2 },

  { name: "Mì tôm", price: 5000, quantity: 1 },

  { name: "Bánh bao", price: 15000, quantity: 3 },
];

let total = 0;
cart.forEach((item) => {
  total += item.price * item.quantity;
});
console.log(total);
