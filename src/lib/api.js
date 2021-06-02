const BASE_URL = 'https://fakestoreapi.com';

const endpoints = {
  products: `${BASE_URL}/products`,
  users: `${BASE_URL}/users`,
  product: (id) => `${BASE_URL}/product/${id}`,
  login: `${BASE_URL}/auth/login`
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

export const login = async ({ userName, password }) => {
  const response = await fetch(endpoints.login, {
    method: 'POST',
    body: JSON.stringify({
      username: userName,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const token = await response.json();
  return token;
};
