export const ProductVouchers = [];

for (let i = 0; i < 10; i++) {
  const discountCode = Math.floor(Math.random() * 10) + 1;
  ProductVouchers.push({ discountCode });
}
