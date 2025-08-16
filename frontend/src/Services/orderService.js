import axios from 'axios';

const API_URL = '/api/orders';

export const createOrder = async (orderData) => {
  const { data } = await axios.post(API_URL, orderData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const getOrders = async () => {
  const { data } = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const getOrderById = async (orderId) => {
  const { data } = await axios.get(`${API_URL}/${orderId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};
