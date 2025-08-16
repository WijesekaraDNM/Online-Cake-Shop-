import axios from 'axios';

const API_URL = '/api/cart';

export const fetchCart = async () => {
  const { data } = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const addToCart = async (item) => {
  const { data } = await axios.post(API_URL, item, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const updateCartItem = async (itemId, quantity) => {
  const { data } = await axios.put(
    `${API_URL}/${itemId}`,
    { quantity },
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
  );
  return data;
};

export const removeCartItem = async (itemId) => {
  const { data } = await axios.delete(`${API_URL}/${itemId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const clearCart = async () => {
  const { data } = await axios.delete(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};
