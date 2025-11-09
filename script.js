document.getElementById('year').textContent = new Date().getFullYear();

const sampleProducts = [
  { id: 1, name: "Tropical Tote Bag", price: "$14.99" },
  { id: 2, name: "Curacao Coffee Blend", price: "$11.50" },
  { id: 3, name: "Beach Phone Case", price: "$9.99" }
];

document.getElementById('shop-btn').addEventListener('click', () => {
  document.getElementById('hero').style.display = 'none';
  const catalog = document.getElementById('catalog');
  catalog.style.display = 'block';
  const ul = document.getElementById('products');
  ul.innerHTML = sampleProducts.map(p => `<li><strong>${p.name}</strong><div>${p.price}</div></li>`).join('');
});
