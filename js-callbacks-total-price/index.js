const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function calculateTotalPrice(products, extractPrice) {
  let totalPrize = 0;
  for (product of products) {
    function extractPrice(product) {
      return product.price;
    }
  }
}

const totalPrice = calculateTotalPrice(products, extractPrice);
console.log(totalPrice); // Output should be 112
