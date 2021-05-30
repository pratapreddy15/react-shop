const BASE_URL = 'https://fakestoreapi.com';

const endpoints = {
  products: `${BASE_URL}/products`,
  users: `${BASE_URL}/users`,
  product: (id) => `${BASE_URL}/product/${id}`
};

export const getAllProducts = async () => {
  const response = await fetch(endpoints.products);
  const products = await response.json();
  return products;
};

export const getAllUsers = async () => {
  const response = await fetch(endpoints.users);
  const products = await response.json();
  return products;
};
