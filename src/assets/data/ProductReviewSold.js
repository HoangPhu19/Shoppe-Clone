export const ProductReviewSold = [];

for (let i = 0; i < 100; i++) {
  const sold = Math.floor(Math.random() * 1000) + 1;
  const review = Math.floor(Math.random() * 1000) + 1;

  ProductReviewSold.push({ sold, review });
}
