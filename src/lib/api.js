const BASE_URL = 'https://fakestoreapi.com';

const endpoints = {
  products: `${BASE_URL}/products`,
  product: (id) => `${BASE_URL}/product/${id}`
};

export const getAllProducts = async () => {
  const response = await fetch(endpoints.products);
  const products = await response.json();
  return products;
};
